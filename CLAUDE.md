# CLAUDE.md — StagesApp-types

## Project overview

Shared TypeScript type library for the Stages language-learning application. Defines domain entities, constants, enums, and helper utilities consumed by both Desktop and Mobile apps.

- **Entry point:** `src/index.ts` (barrel exports)
- **Output:** `dist/` (CommonJS, declaration files, source maps)
- **Not published to npm** — installed directly from the repository
- **Node version:** >= 24.18.1 (CI pins `24.18.1`, matching StagesApp-desktop)

## Commands

- `pnpm run build` — regenerate playlist listen-for data from markdown, then compile with `tsc`
- `pnpm run watch` — compile in watch mode
- `pnpm run generate-locale-data` — regenerate `locales/en.json` from the activity map (see Locales)
- `pnpm run check-en-locale` — fail (exit 1) if `locales/en.json` is out of sync (for CI)
- `pnpm run generate-playlist-listen-for` — regenerate `src/playlist-listen-for-data.ts` from `src/assets/{locale}/*.md`
- `pnpm run check-playlist-listen-for` — fail (exit 1) if playlist listen-for data is out of sync (for CI)

## Code conventions

### Project structure

- All `.ts` source files live directly in `src/`. Do not create subdirectories for grouping. `src/assets/` holds non-TS assets only.
- One domain entity per file, named in **kebab-case** (e.g., `culture-event.ts`, `activity-plan.ts`).

### File organization

- `constants.ts` — all enums, enum-derived union types, and shared constants. Never define enums in entity files.
- `utils.ts` — utility functions (exported as namespace `saTypesUtils`)
- `index.ts` — barrel re-exports:
  - `export * as constants from './constants'` and `export * as saTypesUtils from './utils'` (namespaced)
  - `export * from './entity-name'` for all entity modules (flat)
  - Internal-only modules (e.g., `playlist-listen-for-data.ts`) are intentionally not re-exported

### Domain entity pattern

Each entity file follows this exact sequence:

1. `// noinspection JSUnusedGlobalSymbols` as line 1
2. Imports (only from `./constants` or other entity files)
3. `interface EntityName` — main type with JSDoc on every field
4. `interface NewEntityName extends Omit<EntityName, '_id' | 'createdAt' | 'updatedAt'>` — creation variant with those fields optional. When `_id` carries semantic meaning (e.g., PlaylistItem._id matches CultureEvent._id, Tag uses tagText as key), omit only `'createdAt' | 'updatedAt'`.
5. `const entityNameDefaults = (): EntityName => ({...})` — factory returning zero-value sentinels: `''` for strings, `0` for numbers, `[]` for arrays, `false` for booleans. Never use `null` or `undefined` in defaults.
6. `interface EntityNameHelper` + `const entityNameHelper: EntityNameHelper` — always declared as a pair with explicit type annotation on the const. The mandatory `set()` method signature is `set(entity: EntityName, data: Partial<EntityName>): EntityName` returning `{ ...entity, ...data }`.

When an entity extends CLAFile (e.g., CultureEvent, DRE), its defaults factory uses `...claFileDefaults()` as the first spread, then adds child-specific fields.

### Naming

- **Interfaces/types:** PascalCase (`Person`, `Task`, `ActivityPlan`)
- **Enum-derived types:** PascalCase with `Enum` suffix (`TaskBoxEnum`, `CLAStageEnum`)
- **Properties:** camelCase (`taskTitle`, `activityPlanNumber`)
- **IDs:** `_id` for primary keys, `{entity}Id` for foreign keys
- **Defaults functions:** `{entityName}Defaults()` (camelCase)
- **Helper objects:** `{entityName}Helper` (camelCase)
- **Enums:** PascalCase names with SCREAMING_SNAKE values (`TaskBox.PLAN`, `CLAStage.STAGE_1`)
- **Exported string/number constants:** SCREAMING_SNAKE (`DESKTOP_PUBLIC_KEY_EVENT`, `MAX_HTTP_BUFFER_SIZE`)
- **Private/discriminator fields:** underscore prefix (`_isPE`, `_isSimple`)

### Constants conventions

- Every enum in `constants.ts` is immediately followed by its companion union type: `export type EnumNameEnum = typeof EnumName[keyof typeof EnumName];`
- Enum member string values must match their key names (e.g., `PLAN = 'PLAN'`, not `PLAN = 'plan'`)
- The sync protocol section (after the `// Sync protocol constants` delimiter) uses `export const` for individual constants and `export interface` for structured types, rather than enums.
- Enums shared between Desktop and Mobile apps should include a JSDoc comment explaining why they live in StagesApp-types.

### Type patterns

- Union with empty string for optional enums: `taskBox: TaskBox | ''`
- ISO 8601 strings for all dates: `'2022-06-20T15:50:40.055Z'`
- Inheritance via `extends` for subtypes (e.g., `DRE extends CLAFile`, `CultureEvent extends CLAFile`)

### JSDoc

- All interface fields have JSDoc comments explaining purpose, format, and relationships
- All structural exports (interface, defaults factory, helper interface, helper const) have a JSDoc comment (e.g., `/** Interface defining helper methods for Person */`, `/** Returns a new Person object with default values */`)
- Comments reference domain context (CLA stages, units, mobile vs desktop usage)

### Style

- **Indentation:** 2 spaces
- **Quotes:** single quotes
- **Semicolons:** required
- **Line endings:** LF
- **Union operators:** spaces around `|` (e.g., `TaskBox | ''`, not `TaskBox|''`)
- **`any` types:** allowed (ESLint rule disabled)
- **Dead code:** remove commented-out imports and unused code rather than leaving them in

## Locales

Unlike StagesApp-desktop / -mobile (whose `locales/en.json` is built by `generate-locale-data` scanning source for `<Localize>` usages), this repo's `locales/en.json` holds **only** the activity display names, each under the `Activity` context. It is the English base data the Translator Helper uses to produce `es.json` / `pt.json`, and is read back at runtime by `getActivityDisplayName()`.

The single source of truth is `activityKey2DisplayName` in `src/activity-utils.ts`. **`en.json` is generated from that map — never hand-edit it.** After changing the map (e.g., adding an `ActivityKey` or renaming a display name), run:

```
pnpm run generate-locale-data
```

and commit the updated `locales/en.json`. The generator (`generate-locale-data.js`) runs `tsc` first, then projects the compiled map into the locale shape. `pnpm run check-en-locale` verifies the two are in sync (EOL-agnostic) and is suitable for CI.

## Playlist "What to Listen For"

Editable markdown lives in `src/assets/{locale}/playlistListenForUnitNN.md` (NN = overall CLA unit). **`src/playlist-listen-for-data.ts` is generated from those files — never hand-edit it.** Runtime lookup is `playlistListenFor(unit, locale)` in `src/utils.ts` (embedded strings so Node and React Native both work). Lookup uses the greatest entry unit `<=` the user's unit; Wrap-up (overall unit 26) always returns `''` so it does not inherit Stage 4 content. After adding or editing markdown:

```
pnpm run generate-playlist-listen-for
```

(or just `pnpm run build`, which regenerates then runs `tsc`). `pnpm run check-playlist-listen-for` verifies sync for CI.

## TypeScript config

- **Target:** floating (TS6.0)
- **Module:** CommonJS
- **Strict mode:** forced enabled (TS6.0)
- **Declaration files and maps:** generated

## Testing

No automated test suite is configured for this package.

## Adding a new entity

1. Create `src/{entity-name}.ts` following the domain entity pattern above (all 6 steps)
2. Add `export * from './{entity-name}'` to `src/index.ts`
3. If adding a new enum, add it to `constants.ts` with its companion `EnumNameEnum` type
4. Run `pnpm run build` to verify compilation

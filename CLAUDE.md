# CLAUDE.md — StagesApp-types

## Project overview

Shared TypeScript type library for the Stages language-learning application. Defines domain entities, constants, enums, and helper utilities consumed by both Desktop and Mobile apps.

- **Entry point:** `src/index.ts` (barrel exports)
- **Output:** `dist/` (CommonJS, declaration files, source maps)
- **Not published to npm** — installed directly from the repository

## Commands

- `npm run build` — compile with `tsc`
- `npm run watch` — compile in watch mode
- `npm test` — run tests via `ts-mocha`

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

## TypeScript config

- **Target:** ES2019
- **Module:** CommonJS
- **Strict mode:** enabled
- **Declaration files and maps:** generated

## Testing

- Test files use `*.spec.ts` naming, co-located alongside source in `src/`
- Runner: ts-mocha (`ts-mocha -p ./tsconfig.json './src/**/*.spec.ts'`)
- Assertions: should.js
- Spec files are excluded from the build tsconfig (never shipped in `dist/`)

## Adding a new entity

1. Create `src/{entity-name}.ts` following the domain entity pattern above (all 6 steps)
2. Add `export * from './{entity-name}'` to `src/index.ts`
3. If adding a new enum, add it to `constants.ts` with its companion `EnumNameEnum` type
4. Run `npm run build` to verify compilation

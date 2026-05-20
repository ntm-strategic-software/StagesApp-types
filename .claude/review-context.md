# Review Context — StagesApp-types

This is a shared TypeScript type library consumed by sibling apps. Changes here directly affect consumers, so backwards compatibility and contract alignment are critical.

## Sibling repos

- `../StagesApp-desktop`
- `../StagesApp-mobile`

## Domain context

This repo defines domain entities, constants, enums, and helper utilities for the Stages language-learning application. Types defined here are the contract between Desktop and Mobile apps.

## Repo-specific review criteria

- **Backwards compatibility is paramount.** Renamed fields, changed types, or removed exports will break both consumer apps. Flag any breaking change as blocking unless the branch explicitly coordinates the change across repos.
- **Default values matter.** Consumer apps rely on the defaults factories (e.g., `personDefaults()`) to initialize objects. Changes to default values can cause subtle bugs in consumers — verify that any default change makes sense for both Desktop and Mobile usage.
- **Enum value changes are high-risk.** Enum string values are persisted in databases and synced between devices. Changing an enum value (not just adding a new member) is almost always a breaking change.
- **Sync protocol constants are critical path.** Any changes to types or constants after the `// Sync protocol constants` delimiter in `constants.ts` affect the real-time sync protocol between Desktop and Mobile. These require extra scrutiny for matching implementations on both sides.
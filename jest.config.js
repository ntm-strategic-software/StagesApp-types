/**
 * Jest configuration for StagesApp-types.
 *
 * Test files are named *.spec.ts and live alongside the source in src/.
 * tsconfig.json excludes ./src/**\/*.spec.ts, so `pnpm run build` (tsc) never
 * compiles them into dist/. ts-jest compiles them for the test run instead,
 * with the jest types added on top of the project tsconfig.
 */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.spec.ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: {
        types: ['node', 'jest'],
      },
    }],
  },
};

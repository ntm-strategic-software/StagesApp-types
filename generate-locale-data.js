/**
 * generate-locale-data.js
 *
 * Regenerates `locales/en.json` from the `activityKey2DisplayName` map in
 * `src/activity-utils.ts` so the two can never drift apart.
 *
 * Unlike StagesApp-desktop / -mobile — whose `en.json` is produced by
 * `generate-locale-data` scanning source for `<Localize>` / `Localize.text()`
 * usages — this repo's `en.json` is *only* the set of activity display names.
 * Their single source of truth is `activityKey2DisplayName`; this script
 * projects that map into the locale-file shape the Translator Helper consumes
 * (and that `getActivityDisplayName()` reads back at runtime).
 *
 * Usage (via the npm scripts, which run `tsc` first so `dist/` is current):
 *   pnpm run generate-locale-data   # rewrite locales/en.json from the map
 *   pnpm run check-en-locale      # exit 1 if en.json is stale (for CI)
 *
 * Running this file directly with `node` assumes `dist/` is already built.
 */

const fs = require('fs');
const path = require('path');

const LOCALE = 'en';
const CONTEXT = 'Activity';
const localePath = path.join(__dirname, 'locales', `${LOCALE}.json`);

// Single source of truth — the compiled map. Requires a prior `tsc` build.
let activityKey2DisplayName;
try {
  ({ activityKey2DisplayName } = require('./dist/activity-utils.js'));
} catch (err) {
  console.error(
    'Could not load ./dist/activity-utils.js. Build first with `pnpm run build` ' +
      '(or use `pnpm run generate-locale-data`, which builds for you).\n' +
      err.message,
  );
  process.exit(1);
}

/** Builds the en.json object: { locale, [displayName]: { Activity: { val, note } } }. */
const buildLocaleData = () => {
  const data = {
    locale: LOCALE,
    localeName: 'English',
  };
  for (const displayName of Object.values(activityKey2DisplayName)) {
    // Defensive against two keys mapping to the same display name: merge, don't clobber.
    if (!data[displayName]) {
      data[displayName] = {};
    }
    data[displayName][CONTEXT] = { val: displayName, note: '' };
  }
  return data;
};

/** Returns the line ending used by `content` ('\r\n' if any CRLF, else '\n'). */
const detectEol = (content) => (content.includes('\r\n') ? '\r\n' : '\n');

const localeData = buildLocaleData();
// Existing file (if any) decides the EOL so we don't churn the working tree:
// CRLF on a Windows checkout, LF on macOS/Linux. git normalizes to LF regardless.
const existing = fs.existsSync(localePath) ? fs.readFileSync(localePath, 'utf8') : '';
const eol = existing ? detectEol(existing) : '\n';

// Tab indentation + a single trailing newline — matches the existing file.
const lf = `${JSON.stringify(localeData, null, '\t')}\n`;
const output = lf.replace(/\n/g, eol);

const activityCount = Object.keys(localeData).length - 1; // minus the `locale` key

if (process.argv.includes('--check')) {
  // Compare EOL-agnostically so the check passes on any platform's checkout.
  const normalize = (s) => s.replace(/\r\n/g, '\n');
  if (normalize(existing) === normalize(lf)) {
    console.log(`locales/${LOCALE}.json is in sync with activityKey2DisplayName (${activityCount} activities).`);
    process.exit(0);
  }
  console.error(
    `locales/${LOCALE}.json is OUT OF SYNC with activityKey2DisplayName.\n` +
      'Run `pnpm run generate-locale-data` and commit the result.',
  );
  process.exit(1);
}

fs.writeFileSync(localePath, output);
console.log(`Wrote ${activityCount} activity names to locales/${LOCALE}.json`);

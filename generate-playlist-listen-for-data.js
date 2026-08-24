/**
 * generate-playlist-listen-for-data.js
 *
 * Regenerates `src/playlist-listen-for-data.ts` from markdown assets under
 * `src/assets/{locale}/playlistListenForUnitNN.md` so the embedded runtime
 * strings cannot drift from the editable markdown sources.
 *
 * Content is embedded in TypeScript (not loaded from disk at runtime) so it
 * works in both Node and React Native after `tsc`.
 *
 * Usage:
 *   pnpm run generate-playlist-listen-for   # rewrite the .ts file
 *   pnpm run check-playlist-listen-for      # exit 1 if the .ts file is stale
 *   pnpm run build                          # generate then tsc (also via postinstall)
 *
 * To add content for a new unit range:
 *   1. Create src/assets/{locale}/playlistListenForUnitNN.md (NN = overall claUnit)
 *   2. Run `pnpm run generate-playlist-listen-for` (or `pnpm run build`)
 *
 * To add a locale: add a folder under src/assets/ (e.g. es/) with translated .md files.
 */

const fs = require('fs');
const path = require('path');

const assetsRoot = path.join(__dirname, 'src', 'assets');
const outPath = path.join(__dirname, 'src', 'playlist-listen-for-data.ts');
const filePattern = /^playlistListenForUnit(\d+)\.md$/;

const escapeForTemplateLiteral = (text) =>
  text.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const detectEol = (content) => (content.includes('\r\n') ? '\r\n' : '\n');

const normalizeEol = (s) => s.replace(/\r\n/g, '\n');

/** @returns {Record<string, { unit: number; content: string }[]>} */
const readEntriesByLocale = () => {
  if (!fs.existsSync(assetsRoot)) {
    return {};
  }

  const byLocale = {};
  for (const locale of fs.readdirSync(assetsRoot, { withFileTypes: true })) {
    if (!locale.isDirectory()) continue;
    const localeDir = path.join(assetsRoot, locale.name);
    const entries = [];
    for (const name of fs.readdirSync(localeDir)) {
      const match = filePattern.exec(name);
      if (!match) continue;
      const unit = Number(match[1]);
      const content =
        fs.readFileSync(path.join(localeDir, name), 'utf8').replace(/\r\n/g, '\n').replace(/\s+$/, '') +
        '\n';
      entries.push({ unit, content });
    }
    if (entries.length === 0) continue;
    entries.sort((a, b) => b.unit - a.unit);
    byLocale[locale.name] = entries;
  }
  return byLocale;
};

const buildSource = (byLocale) => {
  const localeKeys = Object.keys(byLocale).sort();
  if (localeKeys.length === 0) {
    throw new Error(
      `No playlistListenForUnit*.md files found under ${assetsRoot}/{locale}/`,
    );
  }

  const localeBlocks = localeKeys.map((locale) => {
    const entries = byLocale[locale]
      .map(({ unit, content }) => {
        const escaped = escapeForTemplateLiteral(content);
        return (
          '    {\n' +
          `      unit: ${unit},\n` +
          '      content:\n' +
          `\`${escaped}\`,\n` +
          '    }'
        );
      })
      .join(',\n');
    return `  ${locale}: [\n${entries}\n  ]`;
  });

  return `/**
 * Playlist "What to Listen For" content entries by locale.
 *
 * GENERATED FILE — do not edit by hand.
 * Source of truth: src/assets/{locale}/playlistListenForUnitNN.md
 * Regenerate: pnpm run generate-playlist-listen-for
 * (Also runs automatically as part of pnpm run build / postinstall.)
 *
 * Content is embedded here so it works in both Node and React Native environments.
 * Within each locale, entries are sorted descending by unit number for efficient lookup.
 */
export interface PlaylistListenForEntry {
  unit: number;
  content: string;
}

export const playlistListenForEntriesByLocale: Record<string, PlaylistListenForEntry[]> = {
${localeBlocks.join(',\n')},
};
`;
};

const byLocale = readEntriesByLocale();
const lfOutput = buildSource(byLocale);
const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : '';
const eol = existing ? detectEol(existing) : '\n';
const output = lfOutput.replace(/\n/g, eol);

const entryCount = Object.values(byLocale).reduce((n, entries) => n + entries.length, 0);
const localeSummary = Object.entries(byLocale)
  .map(([locale, entries]) => `${locale}:${entries.length}`)
  .join(', ');

if (process.argv.includes('--check')) {
  if (normalizeEol(existing) === normalizeEol(lfOutput)) {
    console.log(
      `src/playlist-listen-for-data.ts is in sync with markdown assets (${entryCount} entries; ${localeSummary}).`,
    );
    process.exit(0);
  }
  console.error(
    'src/playlist-listen-for-data.ts is OUT OF SYNC with src/assets/{locale}/playlistListenForUnit*.md.\n' +
      'Run `pnpm run generate-playlist-listen-for` and commit the result.',
  );
  process.exit(1);
}

fs.writeFileSync(outPath, output);
console.log(
  `Wrote ${entryCount} playlist listen-for entries (${localeSummary}) to src/playlist-listen-for-data.ts`,
);

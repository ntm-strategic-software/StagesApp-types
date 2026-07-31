import { hashLocaleContent, playlistListenFor } from './utils';

// Mock the data module so the greatest-lower-entry lookup logic can be tested
// against multiple entries (and locale fallback).
// Entries must be sorted descending by unit, matching the real module's contract.
jest.mock('./playlist-listen-for-data', () => ({
  playlistListenForEntriesByLocale: {
    en: [
      { unit: 10, content: 'en content for unit 10+' },
      { unit: 5, content: 'en content for units 5-9' },
      { unit: 1, content: 'en content for units 1-4' },
    ],
    es: [
      { unit: 5, content: 'es content for units 5+' },
    ],
  },
}));

describe('playlistListenFor', () => {
  it('returns an empty string for units below 1', () => {
    expect(playlistListenFor(0)).toBe('');
    expect(playlistListenFor(-5)).toBe('');
  });

  it('returns the exact entry when the unit matches an entry', () => {
    expect(playlistListenFor(1)).toBe('en content for units 1-4');
    expect(playlistListenFor(5)).toBe('en content for units 5-9');
    expect(playlistListenFor(10)).toBe('en content for unit 10+');
  });

  it('falls back to the greatest entry <= the unit for in-between units', () => {
    expect(playlistListenFor(3)).toBe('en content for units 1-4');
    expect(playlistListenFor(7)).toBe('en content for units 5-9');
    expect(playlistListenFor(9)).toBe('en content for units 5-9');
  });

  it('returns the highest entry for units above the max entry but before wrap-up', () => {
    expect(playlistListenFor(11)).toBe('en content for unit 10+');
    expect(playlistListenFor(25)).toBe('en content for unit 10+');
  });

  it('returns empty for wrap-up (no listen-for guidelines)', () => {
    expect(playlistListenFor(26)).toBe('');
  });

  it('uses the requested locale when present', () => {
    expect(playlistListenFor(5, 'es')).toBe('es content for units 5+');
    expect(playlistListenFor(9, 'es')).toBe('es content for units 5+');
  });

  it('falls back to English when the locale has no entries', () => {
    expect(playlistListenFor(5, 'pt')).toBe('en content for units 5-9');
    expect(playlistListenFor(1, 'zz')).toBe('en content for units 1-4');
  });

  it('real (unmocked) data satisfies the lookup contract: sorted descending per locale', () => {
    const { playlistListenForEntriesByLocale: realByLocale } =
      jest.requireActual<typeof import('./playlist-listen-for-data')>('./playlist-listen-for-data');
    expect(Object.keys(realByLocale).length).toBeGreaterThan(0);
    expect(realByLocale.en.length).toBeGreaterThan(0);
    for (const entries of Object.values(realByLocale)) {
      for (let i = 1; i < entries.length; i++) {
        expect(entries[i].unit).toBeLessThan(entries[i - 1].unit);
      }
      expect(entries[entries.length - 1].content).toContain('What to Listen For');
    }
    // Stage 2 Unit 1 starts at overall unit 6; earlier units have no content yet
    expect(realByLocale.en[realByLocale.en.length - 1].unit).toBe(6);
  });
});

describe('hashLocaleContent', () => {
  // GOLDEN VALUES — cross-repo contract.
  // These exact FNV-1a 32-bit hashes are also asserted in StagesApp-desktop and
  // StagesApp-mobile contract tests. Desktop and mobile compare these hashes over
  // sync to decide whether locale files match. They must NEVER change without
  // coordinating all three repos (StagesApp-types, StagesApp-desktop, StagesApp-mobile).
  it('produces the agreed FNV-1a 32-bit golden values', () => {
    expect(hashLocaleContent('')).toBe('811c9dc5');
    expect(hashLocaleContent('hello')).toBe('4f9f2cab');
    expect(hashLocaleContent('{"greeting":"Olá, mundo — 你好"}')).toBe('c7d41b62');
  });

  it('is deterministic and sensitive to single-character changes', () => {
    expect(hashLocaleContent('hello')).toBe(hashLocaleContent('hello'));
    expect(hashLocaleContent('hello')).not.toBe(hashLocaleContent('hellp'));
  });
});

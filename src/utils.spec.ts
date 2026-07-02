import { hashLocaleContent, playlistListenFor } from './utils';

// Mock the data module so the greatest-lower-entry lookup logic can be tested
// against multiple entries (the real data currently has a single unit-1 entry).
// Entries must be sorted descending by unit, matching the real module's contract.
jest.mock('./playlist-listen-for-data', () => ({
  playlistListenForEntries: [
    { unit: 10, content: 'content for unit 10+' },
    { unit: 5, content: 'content for units 5-9' },
    { unit: 1, content: 'content for units 1-4' },
  ],
}));

describe('playlistListenFor', () => {
  it('returns an empty string for units below 1', () => {
    expect(playlistListenFor(0)).toBe('');
    expect(playlistListenFor(-5)).toBe('');
  });

  it('returns the exact entry when the unit matches an entry', () => {
    expect(playlistListenFor(1)).toBe('content for units 1-4');
    expect(playlistListenFor(5)).toBe('content for units 5-9');
    expect(playlistListenFor(10)).toBe('content for unit 10+');
  });

  it('falls back to the greatest entry <= the unit for in-between units', () => {
    expect(playlistListenFor(3)).toBe('content for units 1-4');
    expect(playlistListenFor(7)).toBe('content for units 5-9');
    expect(playlistListenFor(9)).toBe('content for units 5-9');
  });

  it('returns the highest entry for units above the max entry', () => {
    expect(playlistListenFor(11)).toBe('content for unit 10+');
    expect(playlistListenFor(26)).toBe('content for unit 10+');
  });

  it('real (unmocked) data satisfies the lookup contract: sorted descending, covers unit 1', () => {
    // requireActual bypasses the mock above and loads the real data module.
    const { playlistListenForEntries: realEntries } =
      jest.requireActual<typeof import('./playlist-listen-for-data')>('./playlist-listen-for-data');
    expect(realEntries.length).toBeGreaterThan(0);
    // Sorted descending by unit (the lookup in playlistListenFor relies on this)
    for (let i = 1; i < realEntries.length; i++) {
      expect(realEntries[i].unit).toBeLessThan(realEntries[i - 1].unit);
    }
    // The lowest entry must be unit 1 so every valid unit >= 1 gets content
    expect(realEntries[realEntries.length - 1].unit).toBe(1);
    expect(realEntries[realEntries.length - 1].content).toContain('What to Listen For');
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

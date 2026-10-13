import { TaskBox } from './constants';
import {
  hashLocaleContent,
  isPlaylistPaceSnapshot,
  playlistListenFor,
  playlistSecondsOverlappingWeek,
  shouldHighlightPlaylistIcon,
  weeklyRecommendedPlaylistHours,
} from './utils';

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

const hoursToSeconds = (hours: number) => hours * 3600;

describe('shouldHighlightPlaylistIcon', () => {
  it('is false when the unit has no playlist recommendation (warm-up)', () => {
    expect(shouldHighlightPlaylistIcon(0, 0)).toBe(false);
    expect(shouldHighlightPlaylistIcon(hoursToSeconds(10), 0)).toBe(false);
  });

  it('is false for a negative recommendation', () => {
    expect(shouldHighlightPlaylistIcon(0, -1)).toBe(false);
  });

  it('is true when this week is below unit recommendation / 4', () => {
    expect(shouldHighlightPlaylistIcon(0, 10)).toBe(true);
    expect(shouldHighlightPlaylistIcon(hoursToSeconds(2.5) - 1, 10)).toBe(true);
    expect(shouldHighlightPlaylistIcon(hoursToSeconds(5) - 1, 20)).toBe(true);
  });

  it('is false when this week meets or exceeds unit recommendation / 4', () => {
    expect(shouldHighlightPlaylistIcon(hoursToSeconds(2.5), 10)).toBe(false);
    expect(shouldHighlightPlaylistIcon(hoursToSeconds(3), 10)).toBe(false);
    expect(shouldHighlightPlaylistIcon(hoursToSeconds(5), 20)).toBe(false);
  });
});

describe('weeklyRecommendedPlaylistHours', () => {
  it('divides the unit recommendation by 4', () => {
    expect(weeklyRecommendedPlaylistHours(5)).toBe(1.25);
    expect(weeklyRecommendedPlaylistHours(10)).toBe(2.5);
    expect(weeklyRecommendedPlaylistHours(0)).toBe(0);
  });
});

describe('playlistSecondsOverlappingWeek', () => {
  const weekStart = '2026-03-01T00:00:00.000Z';

  it('counts PLAYLIST sessions for the unit after weekStart', () => {
    const seconds = playlistSecondsOverlappingWeek(
      [{
        claUnit: 2,
        taskBox: TaskBox.PLAYLIST,
        startTime: '2026-03-01T10:00:00.000Z',
        endTime: '2026-03-01T11:00:00.000Z',
      }],
      2,
      weekStart,
    );
    expect(seconds).toBe(3600);
  });

  it('clips a session that started before weekStart', () => {
    const seconds = playlistSecondsOverlappingWeek(
      [{
        claUnit: 2,
        taskBox: TaskBox.PLAYLIST,
        startTime: '2026-02-28T23:30:00.000Z',
        endTime: '2026-03-01T00:30:00.000Z',
      }],
      2,
      weekStart,
    );
    expect(seconds).toBe(1800);
  });

  it('ignores other task boxes, other units, and open sessions', () => {
    const seconds = playlistSecondsOverlappingWeek(
      [
        { claUnit: 2, taskBox: TaskBox.PLAN, startTime: weekStart, endTime: '2026-03-01T02:00:00.000Z' },
        { claUnit: 3, taskBox: TaskBox.PLAYLIST, startTime: weekStart, endTime: '2026-03-01T02:00:00.000Z' },
        { claUnit: 2, taskBox: TaskBox.PLAYLIST, startTime: weekStart, endTime: '' },
      ],
      2,
      weekStart,
    );
    expect(seconds).toBe(0);
  });

  it('treats an empty weekStart as unbounded', () => {
    const seconds = playlistSecondsOverlappingWeek(
      [{
        claUnit: 2,
        taskBox: TaskBox.PLAYLIST,
        startTime: '2020-01-01T00:00:00.000Z',
        endTime: '2020-01-01T00:01:00.000Z',
      }],
      2,
      '',
    );
    expect(seconds).toBe(60);
  });
});

describe('isPlaylistPaceSnapshot', () => {
  it('accepts a complete snapshot', () => {
    expect(isPlaylistPaceSnapshot({
      claUnit: 2,
      weekStart: '2026-03-01T00:00:00.000Z',
      playlistSecondsThisWeek: 10,
      recommendedPlaylistHoursForUnit: 5,
    })).toBe(true);
  });

  it('rejects missing fields and non-objects', () => {
    expect(isPlaylistPaceSnapshot(null)).toBe(false);
    expect(isPlaylistPaceSnapshot({ claUnit: 2 })).toBe(false);
    expect(isPlaylistPaceSnapshot('nope')).toBe(false);
  });
});

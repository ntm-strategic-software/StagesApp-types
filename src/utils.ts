import { playlistListenForEntriesByLocale } from './playlist-listen-for-data';
import { TaskBox, WEEKS_PER_UNIT, type PlaylistPaceSnapshot } from './constants';
import { userHelper } from './user';

const SECONDS_PER_HOUR = 3600;

/**
 * True when this week's playlist time is behind the weekly pace (unit recommendation / 4).
 * Warm-up (and any unit with no playlist recommendation) never highlights. gh1548 / mobile gh744
 */
export const shouldHighlightPlaylistIcon = (
  playlistSecondsThisWeek: number,
  recommendedPlaylistHoursForUnit: number,
): boolean => {
  if (recommendedPlaylistHoursForUnit <= 0) {
    return false;
  }

  return playlistSecondsThisWeek * WEEKS_PER_UNIT < recommendedPlaylistHoursForUnit * SECONDS_PER_HOUR;
};

/** Weekly recommended playlist hours (unit recommendation / 4). */
export const weeklyRecommendedPlaylistHours = (
  recommendedPlaylistHoursForUnit: number,
): number => recommendedPlaylistHoursForUnit / WEEKS_PER_UNIT;

/** Minimal Timesheet shape needed to total Playlist time; a full Timesheet row satisfies it */
export interface PlaylistPaceSession {
  /** Overall 1-based CLA unit the session was recorded in (see Timesheet.claUnit) */
  claUnit?: number | null;
  /** TaskBox of the session; only TaskBox.PLAYLIST is counted */
  taskBox?: string;
  /** ISO 8601 start time of the session */
  startTime?: string;
  /** ISO 8601 end time; sessions without one are still open and are not counted */
  endTime?: string;
}

/**
 * PLAYLIST overlap seconds for claUnit in [weekStart, ∞). Empty weekStart is unbounded.
 * Open sessions (missing endTime) count as 0. Matches desktop timesheet-week-overlap.ts (gh1639).
 */
export const playlistSecondsOverlappingWeek = (
  sessions: PlaylistPaceSession[],
  claUnit: number,
  weekStart: string,
): number => {
  const rangeStartMs = weekStart ? Date.parse(weekStart) : -Infinity;
  if (weekStart && Number.isNaN(rangeStartMs)) {
    return 0;
  }

  let total = 0;
  for (const session of sessions) {
    if (session.claUnit !== claUnit || session.taskBox !== TaskBox.PLAYLIST) {
      continue;
    }
    if (!session.startTime || !session.endTime) {
      continue;
    }
    const startMs = Math.max(Date.parse(session.startTime), rangeStartMs);
    const endMs = Date.parse(session.endTime);
    if (!Number.isNaN(startMs) && !Number.isNaN(endMs) && endMs > startMs) {
      total += (endMs - startMs) / 1000;
    }
  }
  return total;
};

/**
 * True when value is a complete PlaylistPaceSnapshot. Mobile uses this on the sync reply
 * because a desktop that predates the snapshot does not send the field at all.
 */
export const isPlaylistPaceSnapshot = (value: unknown): value is PlaylistPaceSnapshot => {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const v = value as PlaylistPaceSnapshot;
  return typeof v.claUnit === 'number'
    && typeof v.weekStart === 'string'
    && typeof v.playlistSecondsThisWeek === 'number'
    && typeof v.recommendedPlaylistHoursForUnit === 'number';
};

/**
 * Returns the "What to Listen For" content for the given CLA unit and locale.
 * Finds the entry with the greatest unit number that is <= the given unit.
 * Warmup / Stage 1 (before the first content unit) and Wrap-up have no guidelines
 * and return an empty string. Falls back to English when the requested locale has no entries.
 * @param unit - The user's current CLA unit (1-based)
 * @param locale - Locale code (e.g. 'en', 'es', 'pt'); defaults to 'en'
 * @returns The content string, or empty string if no match
 */
export function playlistListenFor(unit: number, locale: string = 'en'): string {
  if (unit < 1) return '';
  // Wrap-up (last overall unit) has no listen-for guidelines — do not inherit Stage 4 content.
  const wrapupUnit = userHelper.lastUnits[userHelper.lastUnits.length - 1];
  if (unit >= wrapupUnit) return '';
  const entries =
    playlistListenForEntriesByLocale[locale]
    ?? playlistListenForEntriesByLocale.en
    ?? [];
  // Entries are sorted descending by unit number
  const entry = entries.find(e => e.unit <= unit);
  return entry ? entry.content : '';
}

/**
 * FNV-1a 32-bit hash — used to compare locale file content across sync.
 * The desktop must use the same algorithm so hashes match.
 */
export const hashLocaleContent = (str: string): string => {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16);
};

export { collectReferencedMediaFiles } from './referenced-media';
export type {
  ReferencedMediaFile,
  ReferencedMediaKind,
  ReferencedMediaTables,
} from './referenced-media';

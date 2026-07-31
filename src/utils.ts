import { playlistListenForEntriesByLocale } from './playlist-listen-for-data';
import { userHelper } from './user';

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

//import { playlistListenForEntries } from './playlist-listen-for-data';

/**
 * Returns the "What to Listen For" content for the given CLA unit.
 * Finds the entry with the greatest unit number that is <= the given unit.
 * @param unit - The user's current CLA unit (1-based)
 * @returns The content string, or empty string if no match
 * applies to gh541, work in progress, references untracked file
 */
/*
export function playlistListenFor(unit: number): string {
  if (unit < 1) return '';
  // Entries are sorted descending by unit number
  const entry = playlistListenForEntries.find(e => e.unit <= unit);
  return entry ? entry.content : '';
}
*/
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

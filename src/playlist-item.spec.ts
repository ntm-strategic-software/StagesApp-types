import dayjs from 'dayjs';

import { playlistItemDefaults, playlistItemHelper } from './playlist-item';
import type { PlaylistItem } from './playlist-item';

/**
 * The helper splits listenedToPrev on the local-midnight boundary of "today".
 * All dates here are computed relative to the test run time (never hard-coded)
 * so the tests are deterministic regardless of when they run.
 */
const makeItem = (listenedToPrev: string[]): PlaylistItem => ({
  ...playlistItemDefaults(),
  _id: 'ce-1',
  listenedToPrev,
});

describe('playlistItemHelper', () => {
  const startOfToday = dayjs().startOf('day');
  const nowIso = dayjs().toISOString();
  const startOfTodayIso = startOfToday.toISOString();
  const endOfYesterdayIso = startOfToday.subtract(1, 'millisecond').toISOString();
  const yesterdayIso = dayjs().subtract(1, 'day').toISOString();
  const lastWeekIso = dayjs().subtract(7, 'day').toISOString();

  describe('getPrev / prev', () => {
    it('returns only timestamps strictly before local midnight today', () => {
      const item = makeItem([lastWeekIso, yesterdayIso, endOfYesterdayIso, startOfTodayIso, nowIso]);
      expect(playlistItemHelper.getPrev(item)).toEqual([lastWeekIso, yesterdayIso, endOfYesterdayIso]);
    });

    it('prev() is true when any listen happened before today', () => {
      expect(playlistItemHelper.prev(makeItem([yesterdayIso]))).toBe(true);
      expect(playlistItemHelper.prev(makeItem([yesterdayIso, nowIso]))).toBe(true);
    });

    it('prev() is false when all listens happened today or the list is empty', () => {
      expect(playlistItemHelper.prev(makeItem([nowIso]))).toBe(false);
      expect(playlistItemHelper.prev(makeItem([]))).toBe(false);
    });
  });

  describe('getToday / today', () => {
    it('returns only timestamps from local midnight today onward', () => {
      const item = makeItem([lastWeekIso, yesterdayIso, endOfYesterdayIso, startOfTodayIso, nowIso]);
      expect(playlistItemHelper.getToday(item)).toEqual([startOfTodayIso, nowIso]);
    });

    it('today() is true when any listen happened today', () => {
      expect(playlistItemHelper.today(makeItem([nowIso]))).toBe(true);
      expect(playlistItemHelper.today(makeItem([yesterdayIso, startOfTodayIso]))).toBe(true);
    });

    it('today() is false when all listens happened before today or the list is empty', () => {
      expect(playlistItemHelper.today(makeItem([yesterdayIso, lastWeekIso]))).toBe(false);
      expect(playlistItemHelper.today(makeItem([]))).toBe(false);
    });

    it('every timestamp lands in exactly one of getPrev/getToday', () => {
      const item = makeItem([lastWeekIso, endOfYesterdayIso, startOfTodayIso, nowIso]);
      const prev = playlistItemHelper.getPrev(item);
      const today = playlistItemHelper.getToday(item);
      expect(prev.length + today.length).toBe(item.listenedToPrev.length);
      expect([...prev, ...today].sort()).toEqual([...item.listenedToPrev].sort());
    });
  });

  describe('set', () => {
    it('merges partial data over an existing PlaylistItem without mutating it', () => {
      const item = playlistItemDefaults();
      const updated = playlistItemHelper.set(item, { title: 'Weaving demo', order: 3 });
      expect(updated.title).toBe('Weaving demo');
      expect(updated.order).toBe(3);
      expect(item.title).toBe('');
      expect(item.order).toBe(0);
    });
  });
});

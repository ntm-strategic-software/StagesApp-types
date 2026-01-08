import dayjs from 'dayjs';

export interface PlaylistItem {
  _id: string
  listenedToPrev: string[]
  order: number
  recordingsAudio: string[]
  recordingsVideo: string[]
  recordingsOrder: string[]
  title: string
  dateRecorded: string
  createdAt: string
  updatedAt: string
}

export interface NewPlaylistItem extends Omit<PlaylistItem, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

export const playlistItemDefaults = (): PlaylistItem => ({
  _id: '',
  listenedToPrev: [],
  order: 0,
  recordingsAudio: [],
  recordingsVideo: [],
  recordingsOrder: [],
  title: '',
  dateRecorded: '',
  createdAt: '',
  updatedAt: '',
});

export interface PlaylistItemHelper {
  getPrev(item: PlaylistItem): string[]
  getToday(item: PlaylistItem): string[]
  prev(item: PlaylistItem): boolean
  today(item: PlaylistItem): boolean
  set(item: PlaylistItem, data: Partial<PlaylistItem>): PlaylistItem
}
export const playlistItemHelper: PlaylistItemHelper = {
  /**
   * Returns ISO strings of times listened to before today
   */
  getPrev(item: PlaylistItem): string[] {
    const now = dayjs();
    const today = dayjs(`${now.format('YYYY')}-${now.format('MM')}-${now.format('DD')}`, 'YYYY-MM-DD');
    return item.listenedToPrev
      .filter(isoDate => dayjs(isoDate).isBefore(today));
  },

  /**
   * Returns ISO strings of times listened to today
   */
  getToday(item: PlaylistItem): string[] {
    const now = dayjs();
    const today = dayjs(`${now.format('YYYY')}-${now.format('MM')}-${now.format('DD')}`, 'YYYY-MM-DD');
    return item.listenedToPrev
      .filter(isoDate => !dayjs(isoDate).isBefore(today));
  },

  /**
   * Returns true if listened to before today
   */
  prev(item: PlaylistItem): boolean {
    return this.getPrev(item).length > 0;
  },

  /**
   * Returns true if listened to today
   */
  today(item: PlaylistItem): boolean {
    return this.getToday(item).length > 0;
  },

  /**
   * Creates an updated PlaylistItem object
   */
  set(item: PlaylistItem, data: Partial<PlaylistItem>): PlaylistItem {
    return {
      ...item,
      ...data,
    };
  },
};

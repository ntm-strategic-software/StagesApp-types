import dayjs from 'dayjs';

/**
 * Represents a PlaylistItem.
 *
 * When the user flags a CultureEvent for the Playlist, a PlaylistItem is created for that CultureEvent.
 *
 * In our database design, these properties and methods could have been added to CultureEvent.
 * But since not all CultureEvents are in the Playlist, it's cleaner and more convenient to maintain a separate table for the Playlist.
 */
export interface PlaylistItem {
  /** ID of the item; matches a CultureEvent's ID */
  _id: string
  /** ISO dates of when listened to previously (e.g., '2022-06-20T15:50:40.055Z') */
  listenedToPrev: string[]
  /** 0-based order of this item in the playlist (the order in which items are displayed and played in the playlist) */
  order: number
  /**
   * Audio recording file names (no path, but does include extension).
   * These are the filenames of all GeneralRecordings for this CultureEvent that have isVideo===false
   */
  recordingsAudio: string[]
  /**
   * Video recording file names (no path, but does include extension).
   * These are the filenames of all GeneralRecordings for this CultureEvent that have isVideo===true
   */
  recordingsVideo: string[]
  /** Each filename in recordingsAudio and recordingsVideo is listed here, in the order they should be played */
  recordingsOrder: string[]
  /** Title of the item; matches a CultureEvent's title. We duplicate it from the CultureEvent for convenience. */
  title: string
  /** ISO date string (e.g., '2022-06-20T15:50:40.055Z'), copied from CultureEvent.date */
  dateRecorded: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewPlaylistItem is PlaylistItem with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewPlaylistItem extends Omit<PlaylistItem, 'createdAt' | 'updatedAt'> {
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database.
   * If not provided, it should be set when the row is created in the database.
   */
  createdAt?: string
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database.
   * If not provided, it should be set when the row is updated in the database.
   */
  updatedAt?: string
}

/** Returns a new PlaylistItem object with default values */
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

/** Interface defining helper methods for PlaylistItem */
export interface PlaylistItemHelper {
  getPrev(item: PlaylistItem): string[]
  getToday(item: PlaylistItem): string[]
  prev(item: PlaylistItem): boolean
  today(item: PlaylistItem): boolean
  set(item: PlaylistItem, data: Partial<PlaylistItem>): PlaylistItem
}
/** Object with helper methods for PlaylistItem */
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

  /** Returns true if listened to before today */
  prev(item: PlaylistItem): boolean {
    return this.getPrev(item).length > 0;
  },

  /** Returns true if listened to today */
  today(item: PlaylistItem): boolean {
    return this.getToday(item).length > 0;
  },

  /** Creates an updated PlaylistItem object by merging an existing PlaylistItem object with new values */
  set(item: PlaylistItem, data: Partial<PlaylistItem>): PlaylistItem {
    return {
      ...item,
      ...data,
    };
  },
};

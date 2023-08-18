import dayjs from 'dayjs';
import { PlaylistItem as PlaylistItemInterface, playlistItemDefaults } from '../playlist-item';

/**
 * Class representing a PlaylistItem.
 *
 * When the user flags a CultureEvent for the Playlist, a PlaylistItem is created for that CultureEvent.
 *
 * In our database design, these properties and methods could have been added to CultureEvent.
 * But since not all CultureEvents are in the Playlist, it's cleaner and more convenient to maintain a separate table for the Playlist.
 */
export class PlaylistItem implements PlaylistItemInterface {

  /**
   * ID of the item; matches a CultureEvent's ID
   */
  _id: string;

  /**
   * ISO dates of when listened to previously (e.g., '2022-06-20T15:50:40.055Z')
   */
  listenedToPrev: string[];

  /**
   * 0-based order of this item in the playlist (the order in which items are displayed and played in the playlist)
   */
  order: number;

  /**
   * Audio recording file names (no path, but does include extension).  These are the filenames of all GeneralRecordings
   * for this CultureEvent that have isVideo===false
   */
  recordingsAudio: string[];

  /**
   * Video recording file names (no path, but does include extension).  These are the filenames of all GeneralRecordings
   * for this CultureEvent that have isVideo===true
   */
  recordingsVideo: string[];

  /**
   * each item in recordingsAudio and recordingsVideo is listed here, in the order they should be played.
   */
  recordingsOrder: string[];

  /**
   * Title of the item; matches a CultureEvent's title.  We duplicate it from the CultureEvent for convenience.
   */
  title: string;

  /**
   * ISO date string (e.g., '2022-06-20T15:50:40.055Z'), copied from CultureEvent.date
   */
  dateRecorded: string;

  /**
   * Creates a PlaylistItem object
   */
  constructor(data?: PlaylistItemInterface) {
    const defaults = playlistItemDefaults();
    this._id = data?._id || defaults._id;
    this.listenedToPrev = data?.listenedToPrev || defaults.listenedToPrev;
    this.order = data?.order || defaults.order;
    this.recordingsAudio = data?.recordingsAudio || defaults.recordingsAudio;
    this.recordingsVideo = data?.recordingsVideo || defaults.recordingsVideo;
    this.recordingsOrder = data?.recordingsOrder || defaults.recordingsOrder;
    this.title = data?.title || defaults.title;
    this.dateRecorded = data?.dateRecorded || defaults.dateRecorded;
  }

  /**
   * Creates an updated PlaylistItem object
   */
  set(data: any) {
    return new PlaylistItem({
      ...this,
      ...data,
    });
  }

  /**
   * Returns ISO strings of times listened to before today
   */
  getPrev(): string[] {
    const now = dayjs();
    const today = dayjs(`${now.format('YYYY')}-${now.format('MM')}-${now.format('DD')}`, 'YYYY-MM-DD');
    return this.listenedToPrev
      .filter(isoDate => dayjs(isoDate).isBefore(today));
  }

  /**
   * Returns ISO strings of times listened to today
   */
  getToday(): string[] {
    const now = dayjs();
    const today = dayjs(`${now.format('YYYY')}-${now.format('MM')}-${now.format('DD')}`, 'YYYY-MM-DD');
    return this.listenedToPrev
      .filter(isoDate => !dayjs(isoDate).isBefore(today));
  }

  /**
   * Returns if listened to before today
   */
  prev(): boolean {
    return this.getPrev().length > 0;
  }

  /**
   * Returns if listened to today
   */
  today(): boolean {
    return this.getToday().length > 0;
  }

}

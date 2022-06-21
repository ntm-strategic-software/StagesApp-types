const moment = require('moment');

/**
 * Class representing a PlaylistItem.
 *
 * When the user flags a CultureEvent for the Playlist, a PlaylistItem is created for that CultureEvent.
 *
 * In our database design, these properties and methods could have been added to CultureEvent.
 * But since not all CultureEvents are in the Playlist, it's cleaner and more convenient to maintain a separate table for the Playlist.
 */
class PlaylistItem {

  /**
   * ID of the item; matches a CultureEvent's ID
   * @type {string}
   */
  _id = '';

  /**
   * ISO dates of when listened to previously (e.g., '2022-06-20T15:50:40.055Z')
   * @type {string[]}
   */
  listenedToPrev = [];

  /**
   * 0-based order of this item in the playlist (the order in which items are displayed and played in the playlist)
   * @type {number}
   */
  order = 0;

  /**
   * Audio recording file names (no path, but does include extension).  These are the filenames of all GeneralRecordings
   * for this CultureEvent that have isVideo===false
   * @type {string[]}
   */
  recordingsAudio = [];

  /**
   * Video recording file names (no path, but does include extension).  These are the filenames of all GeneralRecordings
   * for this CultureEvent that have isVideo===true
   * @type {string[]}
   */
  recordingsVideo = [];

  /**
   * each item in recordingsAudio and recordingsVideo is listed here, in the order they should be played.
   * @type {string[]}
   */
  recordingsOrder = [];

  /**
   * Title of the item; matches a CultureEvent's title.  We duplicate it from the CultureEvent for convenience.
   * @type {string}
   */
  title = '';

  /**
   * ISO date string (e.g., '2022-06-20T15:50:40.055Z'), copied from CultureEvent.date
   * @type {string}
   */
  dateRecorded = '';

  /**
   * Creates a PlaylistItem object
   * @param {{_id: string, listenedToPrev: string[], order: number, recordingsAudio: string[], recordingsVideo: string[], recordingsOrder: string[], title: string, dateRecorded: string}} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated PlaylistItem object
   * @param {{_id: string, listenedToPrev: string[], order: number, recordingsAudio: string[], recordingsVideo: string[], recordingsOrder: string[], title: string, dateRecorded: string}} data
   * @returns {PlaylistItem}
   */
  set(data) {
    return new PlaylistItem({
      ...this,
      ...data,
    });
  }

  /**
   * Returns ISO strings of times listened to before today
   * @returns {string[]}
   */
  getPrev() {
    const now = moment();
    const today = moment(`${now.format('YYYY')}-${now.format('MM')}-${now.format('DD')}`, 'YYYY-MM-DD');
    return this.listenedToPrev
      .filter(isoDate => moment(isoDate).isBefore(today));
  }

  /**
   * Returns ISO strings of times listened to today
   * @returns {string[]}
   */
  getToday() {
    const now = moment();
    const today = moment(`${now.format('YYYY')}-${now.format('MM')}-${now.format('DD')}`, 'YYYY-MM-DD');
    return this.listenedToPrev
      .filter(isoDate => !moment(isoDate).isBefore(today));
  }

  /**
   * Returns if listened to before today
   * @returns {boolean}
   */
  prev() {
    return this.getPrev().length > 0;
  }

  /**
   * Returns if listened to today
   * @returns {boolean}
   */
  today() {
    return this.getToday().length > 0;
  }

}

module.exports = PlaylistItem;

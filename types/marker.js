/**
 * Class representing a point in time in a GeneralRecording, with metadata that applies to the audio/video beginning at that point.
 *
 * The code is commented out for full Marker support, but we can add it in again whenever we want.  The current use is
 * just to mark the beginning of a GeneralRecording.  Markers are displayed visually, and clicking one jumps to that point in the recording.
 */
class Marker {

  /**
   * Unique ID for the marker
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * ID of the CultureEvent that the GeneralRecording belongs to, that this Marker is in (see GeneralRecording.markers)
   * @type {string}
   * @default ''
   */
  cultureEvent = '';

  /**
   * The time (in seconds with decimals) from the beginning of the GeneralRecording, where the marker is
   * @type {number}
   * @default 0
   */
  startTime = 0;

  /**
   * Note that pertains to the part of the audio/video in the GeneralRecording that begins at startTime
   * @type {string}
   * @default ''
   */
  note = '';

  /**
   * Array of IDs of search words that pertain to the part of the audio/video in the GeneralRecording that begins at startTime
   * @type {string[]}
   * @default []
   */
  searchWords = [];

  /**
   * Creates a Marker object
   * @param {Marker|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Marker object
   * @param {Marker|Object} data
   * @returns {Marker}
   */
  set(data) {
    return new Marker({
      ...this,
      ...data,
    });
  }

}

module.exports = Marker;

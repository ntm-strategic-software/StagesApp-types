/**
 * Class representing a General Recording
 */
class GeneralRecording {

  /**
   * Unique ID for the recording
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Whether or not it is a video recording
   * @type {boolean}
   * @default false
   */
  isVideo = false;

  /**
   * Filename of the recording
   * @type {string}
   * @default ''
   */
  filename = '';

  /**
   * User ID of who recorded the event
   * @type {string}
   * @default ''
   */
  recordedBy = '';

  /**
   * Array of photo objects from the recording
   * @type {RecordingPhoto[]}
   * @default []
   */
  photos = [];

  /**
   * Times of markers along the playback timeline
   * @type {number[]}
   */
  markers = [];

  /**
   * Creates a General Recording Object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated GeneralRecording Object
   * @param {Object} data
   * @returns {GeneralRecording}
   */
  set(data) {
    return new GeneralRecording({
      ...this,
      ...data
    });
  }

}

module.exports = GeneralRecording;

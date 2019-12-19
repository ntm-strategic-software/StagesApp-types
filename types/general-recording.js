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
   * Array of IDs of markers from the recording
   * @type {string[]}
   * @default []
   */
  markers = [];

  /**
   * Array of points in time during this recording when the user marked questions
   * @type {number[]}
   * @default []
   */
  questionTimes = []

  /**
   * Array of GeneralPhoto IDs from the recording
   * @type {string[]}
   * @default []
   */
  photos = [];

  /**
   * Array of IDs of SubRecording objects
   * @type {string[]}
   * @default []
   */
  subRecordings = [];

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

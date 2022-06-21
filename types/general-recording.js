/**
 * Class representing a General Recording.
 *
 * The General Recorder in the mobile app creates a new GeneralRecording item when the user switches between audio,
 * video, or takes a picture while recording is paused.  All of these GeneralRecordings are then associated with
 * a single CultureEvent object when the user taps Done in the General Recorder, enters metadata, and saves.
 *
 * Note:  If a picture is taken while recording is paused, a few-second silent audio GeneralRecording is created that
 * the photo is linked to.
 */
class GeneralRecording {

  /**
   * Unique ID for the recording
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * true if it is a video recording; false if it is an audio recording.
   * @type {boolean}
   * @default false
   */
  isVideo = false;

  /**
   * Filename of the recording (no path, but does include extension)
   * @type {string}
   * @default ''
   */
  filename = '';

  /**
   * Array of IDs of markers from the recording.
   * Currently, our mobile code is commented out for full Marker support, but we still create a marker at the
   * beginning of a GeneralRecording.  The functionality is very similar to GeneralQuestions.
   * @type {string[]}
   * @default []
   */
  markers = [];

  /**
   * Array of GeneralQuestions ids from the recording
   * @type {string[]}
   * @default []
   */
  questions = []

  /**
   * Array of GeneralPhotos IDs from the recording
   * @type {string[]}
   * @default []
   */
  photos = [];

  /**
   * Creates a GeneralRecording object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated GeneralRecording object
   * @param {Object} data
   * @returns {GeneralRecording}
   */
  set(data) {
    return new GeneralRecording({
      ...this,
      ...data,
    });
  }

}

module.exports = GeneralRecording;

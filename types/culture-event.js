const CLAFile = require('./cla-file');
const { ClaFileType } = require('./constants');

/**
 * Class representing a Culture Event (our internal term in the software.  In the UI and in Engage, this is called a General Recorder file.)
 *
 * When the user records something with the General Recorder, multiple GeneralRecording objects will be created
 * as the user switches between audio and video modes, or takes pictures while recording is paused.  When the user
 * is done recording, he enters metadata, and saves.
 * At that point one of these CultureEvent objects is created.
 *
 * So a CultureEvent is a creation of the General Recorder, and includes:
 *   - potentially multiple GeneralRecordings
 *   - metadata about the setting, etc.
 *   - the results of the user processing the recording (transcribing, tagging, etc.)
 * @extends CLAFile
 */
class CultureEvent extends CLAFile {
  claFileType() {
    return ClaFileType.CultureEvent;
  }

  /**
   * Unique ID for the Culture Event
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Title of the event
   * @type {string}
   * @default ''
   */
  title = '';

  /**
   * Array of IDs of search words
   * @type {string[]}
   * @default []
   */
  searchWords = [];

  /**
   * ISO Date/Time of the event
   * @type {string}
   * @default ''
   */
  date = '';

  /**
   * Array of Person IDs of helpers from the event
   * @type {string[]}
   * @default []
   */
  helpers = [];

  /**
   * Location ID of where the event took place
   * @type {string}
   * @default ''
   */
  location = '';

  /**
   * The audience of the event
   * @type {string}
   * @default ''
   */
  audience = '';

  /**
   * Array of Outline Item IDs
   * @type {string[]}
   * @default []
   */
  outlineItems = [];

  /**
   * Array of strings from Tag.tagText
   * @type {string[]}
   */
  tags = [];

  /**
   * Array of GeneralRecording Item IDs for all GeneralRecordings that make up this CultureEvent.
   *
   * The General Recorder in the mobile app creates a new GeneralRecording item when the user switches between audio,
   * video, or takes a picture while recording is paused.
   *
   * @type {string[]}
   * @default []
   */
  generalRecordings = [];

  /**
   * CLAStage ID of User's CLA stage at the time of the event
   * @type {string}
   * @default ''
   */
  userCLAStage = '';

  /**
   * What unit is this user in for his current stage?  This number starts over at 1 when a user moves to the next stage.
   * @type {number}
   * @default 1
   */
  userStageUnit = 1;

  /**
   * Event notes
   * @type {string}
   * @default ''
   */
  note = '';

  /**
   * Phonetic Transcription in plain text.  Per Bill, we do not support splitting the phonetic text into sections
   * like we do with the orthographic text.  Phonetic text for a CultureEvent is stored all in one simple string.
   *
   * @type {string}
   * @default ''
   */
  phoneticTranscription = '';

  /**
   * @type {boolean}
   * @default false
   */
  orthographicTranscriptionsDone = false;

  /**
   * Creates a Culture Event Object
   * @param {Object} data
   */
  constructor(data = {}) {
    super(data);
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Culture Event Object
   * @param {Object} data
   * @returns {CultureEvent}
   */
  set(data = {}) {
    return new CultureEvent({
      ...this,
      ...data,
    });
  }
}

module.exports = CultureEvent;

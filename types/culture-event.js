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
   * ISO Date of the event
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
   * User ID of who recorded the event
   * @type {string}
   * @default ''
   */
  recordedBy = '';

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
   * Array of GeneralRecording Item IDs
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
   * What month is this user in for his current stage?
   * @type {number}
   * @default 1
   */
  userStageMonth = 1;

  /**
   * Event notes
   * @type {string}
   * @default ''
   */
  note = '';

  /**
   * Phonetic Transcriptions encoded in HTML
   * @type {string}
   * @default ''
   */
  phoneticTranscriptionsEncoded = '';

  /**
   * Phonetic Transcriptions in plain text
   * @type {string}
   * @default ''
   */
  phoneticTranscriptions = '';

  /**
   * Orthographic Transcriptions encoded in HTML
   * @type {string}
   * @default ''
   */
  orthographicTranscriptionsEncoded = '';

  /**
   * Orthographic Transcriptions in plain text
   * @type {string}
   * @default ''
   */
  orthographicTranscriptions = '';

  /**
   * @type {boolean}
   * @default false
   */
  orthographicTranscriptionsDone = false;

  /**
   * @type {string}
   */
  taggedOrthographicTranscriptions = '';

  /**
   * CultureEvent ID's of related culture events
   * @type {string[]}
   * @default []
   */
  relatedRecordsLinks = [];

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

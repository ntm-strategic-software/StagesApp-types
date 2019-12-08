const { RecordStatus } = require('./constants');

/**
 * Class representing a Culture Event
 */
class CultureEvent {

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
   * Array of IDs of helpers from the event
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
   * Array of worldview Outline Item IDs
   * @type {string[]}
   * @default []
   */
  wVOutlineItems = [];

  /**
   * Array of social Outline Item IDs
   * @type {string[]}
   * @default []
   */
  sSOutlineItems = [];

  /**
   * Array of GeneralRecording Item IDs
   * @type {string[]}
   * @default []
   */
  generalRecordings = [];

  /**
   * Status of the event recording
   * @type {RecordStatus}
   * @default RecordStatus.RECORDED
   */
  recordStatus = RecordStatus.RECORDED;

  /**
   * Event notes
   * @type {string}
   * @default ''
   */
  note = '';

  /**
   * User's CLA stage at the time of the event
   * @type {string}
   * @default ''
   */
  userCLAStage = '';

  /**
   * Creates a Culture Event Object
   * @param {Object} data
   */
  constructor(data = {}) {
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
      ...data
    });
  }

}

module.exports = CultureEvent;

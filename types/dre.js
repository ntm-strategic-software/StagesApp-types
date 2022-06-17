const CLAFile = require('./cla-file');
const { ClaFileType } = require('./constants');

/**
 * Class representing a Dual Recorder Event (our internal name.  In the UI and Engage, a Dual Recorder file.)
 *
 * The user records a native, then records himself telling the same story.  The desktop Stages app has tools
 * to enable the user to transcribe and compare the two texts, to aid in higher-level language learning.
 *
 * @extends CLAFile
 */
class DRE extends CLAFile {
  claFileType() {
    return ClaFileType.DRE;
  }

  /**
   * Unique ID for the DRE Event
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
   * User ID of who recorded the event
   * @type {string}
   * @default ''
   */
  recordedBy = '';

  /**
   * Event notes
   * @type {string}
   * @default ''
   */
  note = '';

  /**
   * Transcription observations
   * @type {string}
   * @default ''
   */
  observations = '';

  /**
   * Recording 1 file name
   * @type {string}
   */
  recording1 = '';

  /**
   * Recording 2 file name
   * @type {string}
   */
  recording2 = '';

  /**
   * Transcrition 1 plain text
   * @type {string}
   */
  transcription1 = '';

  /**
   * Transcription 2 plain text
   * @type {string}
   */
  transcription2 = '';

  /**
   * Transcription 1 encoded in html
   * @type {string}
   */
  transcription1Encoded = '';

  /**
   * Transcription 2 encoded in html
   * @type {string}
   */
  transcription2Encoded = '';

  /**
   * @type {string[]}
   */
  splitText1 = [];

  /**
   * @type {string[]}
   */
  splitText2 = [];

  /**
   * @type {string[]}
   */
  splitCompareText1 = [];

  /**
   * @type {string[]}
   */
  splitCompareText2 = [];

  /**
   * Creates an DRE Event Object
   * @param {Object} data
   */
  constructor(data = {}) {
    super(data);
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated DRE Event Object
   * @param {Object} data
   * @returns {DRE}
   */
  set(data = {}) {
    return new DRE({
      ...this,
      ...data,
    });
  }
}

module.exports = DRE;

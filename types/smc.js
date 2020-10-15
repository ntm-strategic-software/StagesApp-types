/**
 * Class representing an SMC Event
 */
class SMC {

  /**
   * Unique ID for the SMC Event
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
   * Creates an SMC Event Object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated SMC Event Object
   * @param {Object} data
   * @returns {SMC}
   */
  set(data = {}) {
    return new SMC({
      ...this,
      ...data
    });
  }

}

module.exports = SMC;

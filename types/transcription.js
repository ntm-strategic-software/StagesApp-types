/**
 * Class representing the transcription of a section of a CultureEvent.  A single Transcription may cross GeneralRecording boundaries.
 * Translation and metadata can be associated with the transcription.
 */
class Transcription {

  /**
   * Unique ID for the Transcription
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Optional title the user may give to this Transcription
   * @type {string}
   */
  title = '';

  /**
   * Array of SearchWord._id's
   * @type {string[]}
   */
  searchWords = [];

  /**
   * Array of strings from Tag.tagText
   * @type {string[]}
   */
  tags = [];

  /**
   * Array of gridItem keys from CultureGrid on Desktop, in the form or row key, hyphen, column key.  Example:  causeEffect–kinship
   * @type {string[]}
   */
  gridItems = [];

  /**
   * The transcribed text.  This is expected to be in the orthography of the target language.
   * @type {string}
   */
  text = '';

  /**
   * A translation of Transcription.text into the user's language
   * @type {string}
   */
  translation = '';

  /**
   * Any note the user wants to make about this Transcription
   * @type {string}
   */
  note = '';

  /**
   * _id of the CultureEvent this Transcription is a part of
   * @type {string}
   */
  cultureEvent = '';

  /**
   * The order of this Transcription in relation to all other Transcriptions for this CultureEvent
   * @type {number}
   */
  idx = 0;

  /**
   * starting time of the transcription, in seconds (with decimals), from the beginning of the CultureEvent.
   * If there are multiple GeneralRecordings in the CultureEvent, this is the time from the beginning of the first GeneralRecording.
   * @type {number}
   */
  transcriptionStartTime = 0;

  // see gh216 in desktop.  Per Bill, we don't need this.
  // /**
  //  * Not sure we use this
  //  * @type {number}
  //  */
  // endTime = 0;

  /**
   * Constructs a Transcription object
   * @param {Transcription|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Transcription object
   * @param {Transcription|Object} data
   * @returns {Transcription}
   */
  set(data) {
    return new Transcription({
      ...this,
      ...data,
    });
  }

}

module.exports = Transcription;

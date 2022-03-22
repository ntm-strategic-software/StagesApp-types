/**
 * Class representing a text transcription
 */
class Transcription {

  /**
   * Unique ID for the transcription
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * @type {string}
   */
  createdAt = '';

  /**
   * @type {string}
   */
  updatedAt = '';

  /**
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
   * Array of OutlineItem._id's
   * @type {string[]}
   */
  outlineItems = [];

  /**
   * The transcribed text associate with the transcription
   * @type {string}
   */
  text = '';

  /**
   * The translated transcription text
   * @type {string}
   */
  translation = '';

  /**
   * @type {string}
   */
  note = '';

  /**
   * a CultureEvent._id
   * @type {string}
   */
  cultureEvent = '';

  /**
   * @type {number}
   */
  idx = 0;

  /**
   * @type {number}
   */
  startTime = 0;

  /**
   * @type {number}
   */
  endTime = 0;

  /**
   * Constructs a text transcription
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated text transcription
   * @param {Object} data
   * @returns {Transcription}
   */
  set(data) {
    return new Transcription({
      ...this,
      ...data
    });
  }

}

module.exports = Transcription;

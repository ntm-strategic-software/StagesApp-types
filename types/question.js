class Question {

  /**
   * Unique ID for the Question
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * ID of culture event
   * @type {string}
   * @default ''
   */
  cultureEvent = '';

  /**
   * Time of question start
   * @type {number}
   * @default 0
   */
  startTime = 0;

  /**
   * Time of question end
   * @type {number}
   * @default 0
   */
  endTime = 0;

  /**
   * Filename
   * @type {string}
   * @default ''
   */
  filename = '';

  /**
   * Question text
   * @type {string}
   * @default ''
   */
  text = '';

  /**
   * Creates a Question Object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Question Object
   * @param {Object} data
   * @returns {Question}
   */
  set(data = {}) {
    return new Question({
      ...this,
      ...data
    });
  }

}

module.exports = Question;

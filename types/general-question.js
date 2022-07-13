/**
 * A GeneralQuestion is associated with a GeneralRecording, and is created when the user:
 * - Mobile:  taps the GeneralQuestion button while recording a GeneralRecording
 * - Desktop:  right-clicks and adds a question on the recording
 *
 * For convenience, the id of the CultureEvent that the GeneralRecording is associated with is included in the GeneralQuestion,
 * so we don't have to trace back through the GeneralRecording to get to the CultureEvent.
 */
class GeneralQuestion {

  /**
   * Unique ID for the GeneralQuestion
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * ID of the CultureEvent this question is associated with, for convenience
   * @type {string}
   * @default ''
   */
  cultureEvent = '';

  /**
   * Time of the question marker, in seconds (with decimals), from the beginning of the GeneralRecording that this question is on (see GeneralRecording.questions)
   * @type {number}
   * @default 0
   */
  startTime = 0;

  /**
   * On Mobile, user can tap a Question marker when reviewing a CultureEvent to record a question.
   * filename does not include a path, but does include extension.
   * @type {string}
   * @default ''
   */
  filename = '';

  /**
   * On Desktop, user can click a Question marker when reviewing a CultureEvent and type their question
   * @type {string}
   * @default ''
   */
  text = '';

  /**
   * Creates a GeneralQuestion object
   * @param {GeneralQuestion|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated GeneralQuestion object
   * @param {GeneralQuestion|Object} data
   * @returns {GeneralQuestion}
   */
  set(data = {}) {
    return new GeneralQuestion({
      ...this,
      ...data,
    });
  }

}

module.exports = GeneralQuestion;

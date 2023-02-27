/**
 * Class representing a Reflection Question.
 */
class ReflectionQuestion {
  /**
   * Unique ID for the ReflectionQuestion.
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Key of the ReflectionQuestion.
   * @type {string}
   * @default ''
   */
  questionKey = '';

  /**
   * claUnit of the question.  This is the overall unit in CLA, and is 1-based.
   * @type {number}
   */
  claUnit = 0;

  /**
   * Set of questions to which this question belongs.
   * @type {QuestionSets|string}
   */
  questionSet = '';

  /**
   * Text of the question.
   * @type {string}
   * @default ''
   */
  questionText = '';

  /**
   * Type of answer expected.
   * @type {AnswerTypes|string}
   */
  answerType = '';

  /**
   * User's answer to the question.  This is a string, but how to display it depends on the answerType.
   * @type {string}
   */
  answer = '';

  /**
   * Constructs an ReflectionQuestion object
   * @param {ReflectionQuestion|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated ReflectionQuestion object
   * @param {ReflectionQuestion|Object} data
   * @returns {ReflectionQuestion}
   */
  set(data) {
    return new ReflectionQuestion({
      ...this,
      ...data,
    });
  }

}

module.exports = ReflectionQuestion;

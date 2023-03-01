/**
 * Class representing a Self-Evaluation Question.
 */
class SelfEvaluationQuestion {
  /**
   * Unique ID for the SelfEvaluationQuestion.
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Key of the SelfEvaluationQuestion.
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
   * Summary of the question.
   * @type {string}
   * @default ''
   */
  questionSummary = '';

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
   * Sort order of the question within the claUnit.
   * @type {number}
   */
  sortOrder = 0;

  /**
   * Constructs a SelfEvaluationQuestion object
   * @param {SelfEvaluationQuestion|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated SelfEvaluationQuestion object
   * @param {SelfEvaluationQuestion|Object} data
   * @returns {SelfEvaluationQuestion}
   */
  set(data) {
    return new SelfEvaluationQuestion({
      ...this,
      ...data,
    });
  }

}

module.exports = SelfEvaluationQuestion;

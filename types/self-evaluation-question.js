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
  key = '';

  /**
   * claUnit of the question.  This is the overall unit in CLA, and is 1-based.
   * @type {number}
   */
  claUnit = 0;

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

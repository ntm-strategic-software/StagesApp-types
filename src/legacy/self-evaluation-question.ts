import {
  SelfEvaluationQuestion as SelfEvaluationQuestionInterface,
  selfEvaluationQuestionDefaults
} from '../self-evaluation-question';
import { AnswerTypes } from '../constants';

/**
 * Class representing a Self-Evaluation Question.
 */
export class SelfEvaluationQuestion implements SelfEvaluationQuestionInterface {

  /**
   * Unique ID for the SelfEvaluationQuestion.
   */
  _id: string;

  /**
   * Key of the SelfEvaluationQuestion.
   */
  questionKey: string;

  /**
   * claUnit of the question.  This is the overall unit in CLA, and is 1-based.
   */
  claUnit: number;

  /**
   * Summary of the question.
   */
  questionSummary: string;

  /**
   * Text of the question.
   */
  questionText: string;

  /**
   * Type of answer expected.
   */
  answerType: AnswerTypes|'';

  /**
   * User's answer to the question.  This is a string, but how to display it depends on the answerType.
   */
  answer: string;

  /**
   * Sort order of the question within the claUnit.
   */
  sortOrder: number;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Constructs a SelfEvaluationQuestion object
   */
  constructor(data?: SelfEvaluationQuestionInterface) {
    const defaults = selfEvaluationQuestionDefaults();
    this._id = data?._id || defaults._id;
    this.questionKey = data?.questionKey || defaults.questionKey;
    this.claUnit = data?.claUnit || defaults.claUnit;
    this.questionSummary = data?.questionSummary || defaults.questionSummary;
    this.questionText = data?.questionText || defaults.questionText;
    this.answerType = data?.answerType || defaults.answerType;
    this.answer = data?.answer || defaults.answer;
    this.sortOrder = data?.sortOrder || defaults.sortOrder;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated SelfEvaluationQuestion object
   */
  set(data: Partial<SelfEvaluationQuestionInterface>) {
    return new SelfEvaluationQuestion({
      ...this,
      ...data,
    });
  }

}

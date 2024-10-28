import { ReflectionQuestion as ReflectionQuestionInterface, reflectionQuestionDefaults } from '../reflection-question';
import { ReflectionQuestionSets } from '../constants';

/**
 * Class representing a Reflection Question.
 */
export class ReflectionQuestion implements ReflectionQuestionInterface {
  /**
   * Unique ID for the ReflectionQuestion.
   */
  _id: string;

  /**
   * Key of the ReflectionQuestion.
   */
  questionKey: string;

  /**
   * claUnit of the question.  This is the overall unit in CLA, and is 1-based.
   */
  claUnit: number;

  /**
   * Week of the question.  This is the week within the unit, and is 1-based.
   */
  week: number;

  /**
   * Set of questions to which this question belongs.
   */
  questionSet: ReflectionQuestionSets|'';

  /**
   * Sort order of the question within the QuestionSet.
   */
  sortOrder: number;

  /**
   * User's answer to the question.  This is a string, but how to display it depends on the answerType.
   */
  answer: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Constructs an ReflectionQuestion object
   */
  constructor(data?: ReflectionQuestionInterface) {
    const defaults = reflectionQuestionDefaults();
    this._id = data?._id || defaults._id;
    this.questionKey = data?.questionKey || defaults.questionKey;
    this.claUnit = data?.claUnit || defaults.claUnit;
    this.week = data?.week || defaults.week;
    this.questionSet = data?.questionSet || defaults.questionSet;
    this.sortOrder = data?.sortOrder || defaults.sortOrder;
    this.answer = data?.answer || defaults.answer;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated ReflectionQuestion object
   */
  set(data: Partial<ReflectionQuestionInterface>) {
    return new ReflectionQuestion({
      ...this,
      ...data,
    });
  }

}

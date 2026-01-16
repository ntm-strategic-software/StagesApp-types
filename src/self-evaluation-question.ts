import { AnswerTypes } from './constants';

/**
 * Represents a Self-Evaluation Question.
 * At certain points in CLA, users are prompted to answer self-evaluation questions.
 */
export interface SelfEvaluationQuestion {
  /** Unique ID for the SelfEvaluationQuestion */
  _id: string
  /**
   * Key of the SelfEvaluationQuestion.
   * Many of the same questions are asked in each evaluation.  questionKey identifies
   * which generic question this is, whereas _id indicates the specific instance of this generic question.
   */
  questionKey: string
  /** claUnit of the question. This is the overall unit in CLA, and is 1-based. */
  claUnit: number
  /** Summary of the question */
  questionSummary: string
  /** Text of the question */
  questionText: string
  /** Type of answer expected */
  answerType: AnswerTypes | ''
  /** User's answer to the question. This is a string, but how to display it depends on the answerType. */
  answer: string
  /** Sort order of the question within the claUnit */
  sortOrder: number
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewSelfEvaluationQuestion is SelfEvaluationQuestion with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewSelfEvaluationQuestion extends Omit<SelfEvaluationQuestion, 'createdAt' | 'updatedAt'> {
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database.
   * If not provided, it should be set when the row is created in the database.
   */
  createdAt?: string
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database.
   * If not provided, it should be set when the row is updated in the database.
   */
  updatedAt?: string
}

/** Returns a new SelfEvaluationQuestion object with default values */
export const selfEvaluationQuestionDefaults = (): SelfEvaluationQuestion => ({
  _id: '',
  questionKey: '',
  claUnit: 0,
  questionSummary: '',
  questionText: '',
  answerType: '',
  answer: '',
  sortOrder: 0,
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for SelfEvaluationQuestion */
export interface SelfEvaluationQuestionHelper {
  set(item: SelfEvaluationQuestion, data: Partial<SelfEvaluationQuestion>): SelfEvaluationQuestion
}
/** Object with helper methods for SelfEvaluationQuestion */
export const selfEvaluationQuestionHelper = {
  /** Creates an updated SelfEvaluationQuestion object by merging an existing SelfEvaluationQuestion object with new values */
  set(item: SelfEvaluationQuestion, data: Partial<SelfEvaluationQuestion>): SelfEvaluationQuestion {
    return {
      ...item,
      ...data,
    };
  },
};

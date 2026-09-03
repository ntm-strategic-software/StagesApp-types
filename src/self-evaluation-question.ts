// noinspection JSUnusedGlobalSymbols

/**
 * Represents a Self-Evaluation Question.
 * At certain points in CLA, users are prompted to answer self-evaluation questions.
 * Prompt text, answer type, and options live in the Stages Desktop template, not on this row —
 * same pattern as ReflectionQuestion.
 */
export interface SelfEvaluationQuestion {
  /** Unique ID for the SelfEvaluationQuestion */
  _id: string
  /**
   * Key of the SelfEvaluationQuestion.
   * questionKey identifies which template question this is (including version suffix);
   * _id indicates the specific instance created for this user and checkpoint.
   */
  questionKey: string
  /** claUnit of the question. This is the overall unit in CLA, and is 1-based. */
  claUnit: number
  /**
   * User's answer to the question. This is a string, but how to display it depends on the answerType
   * in the template.
   * See enum AnswerTypes and Stages Desktop self-eval-questions-template.ts (catalog in self-eval-content.ts)
   * for more details.
   */
  answer: string
  /** Sort order of the question within the claUnit */
  sortOrder: number
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewSelfEvaluationQuestion is SelfEvaluationQuestion with _id, createdAt, and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewSelfEvaluationQuestion extends Omit<SelfEvaluationQuestion, '_id' | 'createdAt' | 'updatedAt'> {
  /** Unique ID for the SelfEvaluationQuestion */
  _id?: string
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
export const selfEvaluationQuestionHelper: SelfEvaluationQuestionHelper = {
  /** Creates an updated SelfEvaluationQuestion object by merging an existing SelfEvaluationQuestion object with new values */
  set(item: SelfEvaluationQuestion, data: Partial<SelfEvaluationQuestion>): SelfEvaluationQuestion {
    return {
      ...item,
      ...data,
    };
  },
};

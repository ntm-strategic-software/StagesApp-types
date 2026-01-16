import { ReflectionQuestionSets } from './constants';

/**
 * Represents a Reflection Question.  Each week, the user reflects on their CLA experience
 * by answering a set of Reflection Questions.
 */
export interface ReflectionQuestion {
  /** Unique ID for the ReflectionQuestion */
  _id: string
  /**
   * Key of the ReflectionQuestion.
   * Many of the same questions are asked weekly.  questionKey identifies which generic question this is,
   * whereas _id indicates the specific instance of this generic question.
   */
  questionKey: string
  /** claUnit of the question. This is the overall unit in CLA, and is 1-based. */
  claUnit: number
  /** Week of the question. This is the week within the claUnit, and is 1-based. */
  week: number
  /** Set of questions to which this question belongs */
  questionSet: ReflectionQuestionSets | ''
  /** Sort order of the question within the QuestionSet */
  sortOrder: number
  /**
   * User's answer to the question. This is a string, but how to display it depends on the answerType.
   * See enum AnswerTypes and Stages Desktop reflection-questions-template.tsx for more details.
   */
  answer: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewReflectionQuestion is ReflectionQuestion with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewReflectionQuestion extends Omit<ReflectionQuestion, 'createdAt' | 'updatedAt'> {
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

/** Returns a new ReflectionQuestion object with default values */
export const reflectionQuestionDefaults = (): ReflectionQuestion => ({
  _id: '',
  questionKey: '',
  claUnit: 0,
  week: 0,
  questionSet: '',
  sortOrder: 0,
  answer: '',
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for ReflectionQuestion */
export interface ReflectionQuestionHelper {
  set(item: ReflectionQuestion, data: Partial<ReflectionQuestion>): ReflectionQuestion
}
/** Object with helper methods for ReflectionQuestion */
export const reflectionQuestionHelper: ReflectionQuestionHelper = {
  /** Creates an updated ReflectionQuestion object by merging an existing ReflectionQuestion object with new values */
  set(item: ReflectionQuestion, data: Partial<ReflectionQuestion>): ReflectionQuestion {
    return {
      ...item,
      ...data,
    };
  },
};

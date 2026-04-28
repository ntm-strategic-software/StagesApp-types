// noinspection JSUnusedGlobalSymbols

import { ReflectionQuestionSets } from './constants';

/**
 * Represents a Daily Reflection Question.  Each day for the first 10 days of CLA, the user reflects on their CLA experience
 * by answering a set of Daily Reflection Questions.
 */
export interface DailyReflectionQuestion {
  /** Unique ID for the DailyReflectionQuestion */
  _id: string
  /**
   * Key of the DailyReflectionQuestion.
   * Many of the same questions are asked weekly.  questionKey identifies which generic question this is,
   * whereas _id indicates the specific instance of this generic question.
   */
  questionKey: string
  /** Day of the question. This is 1-based. */
  day: number
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
 * NewDailyReflectionQuestion is DailyReflectionQuestion with _id, createdAt, and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewDailyReflectionQuestion extends Omit<DailyReflectionQuestion, '_id' | 'createdAt' | 'updatedAt'> {
  /** Unique ID for the DailyReflectionQuestion */
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

/** Returns a new DailyReflectionQuestion object with default values */
export const dailyReflectionQuestionDefaults = (): DailyReflectionQuestion => ({
  _id: '',
  questionKey: '',
  day: 0,
  questionSet: '',
  sortOrder: 0,
  answer: '',
  createdAt: '',
  updatedAt: '',
});

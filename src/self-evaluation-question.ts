import { AnswerTypes } from './constants';

export interface SelfEvaluationQuestion {
  _id: string
  questionKey: string
  claUnit: number
  questionSummary: string
  questionText: string
  answerType: AnswerTypes|''
  answer: string
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface NewSelfEvaluationQuestion extends Omit<SelfEvaluationQuestion, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

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

export interface SelfEvaluationQuestionHelper {
  set(item: SelfEvaluationQuestion, data: Partial<SelfEvaluationQuestion>): SelfEvaluationQuestion
}
export const selfEvaluationQuestionHelper = {
  /**
   * Creates an updated SelfEvaluationQuestion object
   */
  set(item: SelfEvaluationQuestion, data: Partial<SelfEvaluationQuestion>): SelfEvaluationQuestion {
    return {
      ...item,
      ...data,
    };
  },
};

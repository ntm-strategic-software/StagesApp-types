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

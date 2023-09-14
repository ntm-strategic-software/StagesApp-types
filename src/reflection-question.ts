import { AnswerTypes, ReflectionQuestionSets } from './constants';

export interface ReflectionQuestion {
  _id: string
  questionKey: string
  claUnit: number
  questionSet: ReflectionQuestionSets|''
  sortOrder: number
  questionText: string
  answerType: AnswerTypes|''
  answer: string
  createdAt?: string
  updatedAt?: string
}
export const reflectionQuestionDefaults = (): ReflectionQuestion => ({
  _id: '',
  questionKey: '',
  claUnit: 0,
  questionSet: '',
  sortOrder: 0,
  questionText: '',
  answerType: '',
  answer: '',
  createdAt: '',
  updatedAt: '',
});

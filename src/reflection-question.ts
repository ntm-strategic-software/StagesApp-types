import { ReflectionQuestionSets } from './constants';

export interface ReflectionQuestion {
  _id: string
  questionKey: string
  claUnit: number
  week: number
  questionSet: ReflectionQuestionSets|''
  sortOrder: number
  answer: string
  createdAt?: string
  updatedAt?: string
}
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

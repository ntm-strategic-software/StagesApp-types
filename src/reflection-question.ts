import { ReflectionQuestionSets } from './constants';

export interface ReflectionQuestion {
  _id: string
  questionKey: string
  claUnit: number
  week: number
  questionSet: ReflectionQuestionSets|''
  sortOrder: number
  answer: string
  createdAt: string
  updatedAt: string
}

export interface NewReflectionQuestion extends Omit<ReflectionQuestion, 'createdAt' | 'updatedAt'> {
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

export interface ReflectionQuestionHelper {
  set(item: ReflectionQuestion, data: Partial<ReflectionQuestion>): ReflectionQuestion
}
export const reflectionQuestionHelper = {
  /**
   * Creates an updated ReflectionQuestion object
   */
  set(item: ReflectionQuestion, data: Partial<ReflectionQuestion>): ReflectionQuestion {
    return {
      ...item,
      ...data,
    };
  },
};

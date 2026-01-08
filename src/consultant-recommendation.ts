export interface ConsultantRecommendation {
  _id: string
  claUnit: number
  recommendationText: string
  okToAdvance: boolean
  createdAt: string
  updatedAt: string
}

export interface NewConsultantRecommendation extends Omit<ConsultantRecommendation, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

export const consultantRecommendationDefaults = (): ConsultantRecommendation => ({
  _id: '',
  claUnit: 0,
  recommendationText: '',
  okToAdvance: false,
  createdAt: '',
  updatedAt: '',
});

export interface ConsultantRecommendationHelper {
  set(rec: ConsultantRecommendation, data: Partial<ConsultantRecommendation>): ConsultantRecommendation
}
export const consultantRecommendationHelper = {
  /**
   * Creates an updated ConsultantRecommendation object
   */
  set(rec: ConsultantRecommendation, data: Partial<ConsultantRecommendation>): ConsultantRecommendation {
    return {
      ...rec,
      ...data,
    };
  },
};

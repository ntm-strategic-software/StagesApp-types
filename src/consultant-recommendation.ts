export interface ConsultantRecommendation {
  _id: string
  claUnit: number
  recommendationText: string
  okToAdvance: boolean
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

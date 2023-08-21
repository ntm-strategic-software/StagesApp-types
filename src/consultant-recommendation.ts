export interface ConsultantRecommendation {
  _id: string
  claUnit: number
  recommendationText: string
  okToAdvance: boolean
}
export const consultantRecommendationDefaults = (): ConsultantRecommendation => ({
  _id: '',
  claUnit: 0,
  recommendationText: '',
  okToAdvance: false,
});

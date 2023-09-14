import {
  ConsultantRecommendation as ConsultantRecommendationInterface,
  consultantRecommendationDefaults
} from '../consultant-recommendation';

/**
 * Class representing a Consultant Recommendation.
 */
export class ConsultantRecommendation implements ConsultantRecommendationInterface {

  /**
   * Unique ID for the ConsultantRecommendation.
   */
  _id: string;

  /**
   * claUnit of the recommendation.  This is the overall unit in CLA, and is 1-based.
   */
  claUnit: number;

  /**
   * Text of the recommendation.
   */
  recommendationText: string;

  /**
   * whether the consultant recommends the user to advance to the next unit
   */
  okToAdvance: boolean;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Constructs a ConsultantRecommendation object
   */
  constructor(data?: ConsultantRecommendationInterface) {
    const defaults = consultantRecommendationDefaults();
    this._id = data?._id || defaults._id;
    this.claUnit = data?.claUnit || defaults.claUnit;
    this.recommendationText = data?.recommendationText || defaults.recommendationText;
    this.okToAdvance = data?.okToAdvance || defaults.okToAdvance;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated ConsultantRecommendation object
   */
  set(data: Partial<ConsultantRecommendationInterface>) {
    return new ConsultantRecommendation({
      ...this,
      ...data,
    });
  }

}

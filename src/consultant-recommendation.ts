/** A consultant's recommendation after reviewing a user's progress in a CLA unit */
export interface ConsultantRecommendation {
  /** Unique identifier for the ConsultantRecommendation */
  _id: string
  /** CLA unit of the recommendation. This is the overall unit in CLA, and is 1-based. */
  claUnit: number
  /** Text of the recommendation */
  recommendationText: string
  /** Whether the consultant recommends the user to advance to the next unit */
  okToAdvance: boolean
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewConsultantRecommendation is ConsultantRecommendation with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewConsultantRecommendation extends Omit<ConsultantRecommendation, 'createdAt' | 'updatedAt'> {
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

/** Returns a new ConsultantRecommendation object with default values */
export const consultantRecommendationDefaults = (): ConsultantRecommendation => ({
  _id: '',
  claUnit: 0,
  recommendationText: '',
  okToAdvance: false,
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for ConsultantRecommendation */
export interface ConsultantRecommendationHelper {
  set(rec: ConsultantRecommendation, data: Partial<ConsultantRecommendation>): ConsultantRecommendation
}
/** Object with helper methods for ConsultantRecommendation */
export const consultantRecommendationHelper: ConsultantRecommendationHelper = {
  /** Creates an updated ConsultantRecommendation object by merging an existing ConsultantRecommendation object with new values */
  set(rec: ConsultantRecommendation, data: Partial<ConsultantRecommendation>): ConsultantRecommendation {
    return {
      ...rec,
      ...data,
    };
  },
};

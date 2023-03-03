/**
 * Class representing a Consultant Recommendation.
 */
class ConsultantRecommendation {
  /**
   * Unique ID for the ConsultantRecommendation.
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * claUnit of the recommendation.  This is the overall unit in CLA, and is 1-based.
   * @type {number}
   */
  claUnit = 0;

  /**
   * Text of the recommendation.
   * @type {string}
   * @default ''
   */
  recommendationText = '';

  /**
   * whether the consultant recommends the user to advance to the next unit
   * @type {boolean}
   */
  okToAdvance = false;

  /**
   * Constructs a ConsultantRecommendation object
   * @param {ConsultantRecommendation|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated ConsultantRecommendation object
   * @param {ConsultantRecommendation|Object} data
   * @returns {ConsultantRecommendation}
   */
  set(data) {
    return new ConsultantRecommendation({
      ...this,
      ...data,
    });
  }

}

module.exports = ConsultantRecommendation;

class Observation {

  /**
   * Unique ID for the Observation
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Title of the Observation
   * @type {string}
   * @default ''
   */
  title = '';

  /**
   * CLAStage ID of User's CLA stage at the time of the observation
   * @type {string}
   * @default ''
   */
  claStage = '';

  /**
   * Date/time the Observation was created, as an ISO String
   * @type {string}
   * @default ''
   */
  date = '';

  /**
   * Text of the Observation
   * @type {string}
   * @default ''
   */
  text = '';

  /**
   * Creates an Observation Object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Observation Object
   * @param {Object} data
   * @returns {Observation}
   */
  set(data = {}) {
    return new Observation({
      ...this,
      ...data,
    });
  }

}

module.exports = Observation;

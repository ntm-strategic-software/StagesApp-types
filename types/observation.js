/**
 * Plain text notes that a user wants to make about anything.  These are not connected to anything else in the app.
 */
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
   * User's CLA stage at the time of the observation (we store the key of the appropriate CLAStage enum)
   * @type {string}
   * @default ''
   */
  claStage = '';

  /**
   * Date/time the Observation was created, as an ISO Date string (e.g., '2022-06-20T15:50:40.055Z')
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
   * Creates an Observation object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Observation object
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

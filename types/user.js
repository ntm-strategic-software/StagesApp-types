const { CLAStage } = require('./constants');

/**
 * Class representing a user.  This is unrelated to the People table.
 */
class User {

  /**
   * Unique ID for the user
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * User's common name
   * @type {string}
   * @default ''
   */
  name = '';

  /**
   * User's full name
   * @type {string}
   * @default ''
   */
  fullName = '';

  /**
   * Filename of a picture of the user
   * @type {string}
   * @default ''
   */
  photoFilename = '';

  /**
   * User's current CLA stage
   * @type {CLAStage|string}
   * @default CLAStage.STAGE_1
   */
  claStage = CLAStage.STAGE_1;

  /**
   * User's current overall unit in CLA.  There are 25 total units.
   * @type {number}
   * @default 1
   */
  claUnit = 1;

  /**
   * Given a claUnit (overall unit number), computes the unit within the stage.  This number resets to 1 when a user moves to a new stage.
   * @returns {number}
   */
  static unitInStage(claUnit) {
    const lastUnits = [0, 1, 5, 10, 17, 25];  // first item is 0, then the last claUnit for each stage from warmup through the end of cla

    const currentStage = lastUnits.findIndex(u => u >= claUnit);
    return claUnit - lastUnits[currentStage - 1];
  }

  /**
   * Creates a user object
   * @param {User|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated user object
   * @param {User|Object} data
   * @returns {User}
   */
  set(data) {
    return new User({
      ...this,
      ...data,
    });
  }
}

module.exports = User;

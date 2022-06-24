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
   * User's current CLA stage
   * @type {CLAStage|string}
   * @default CLAStage.STAGE_1
   */
  claStage = CLAStage.STAGE_1;

  /**
   * The unit this user is in for the claStage he is in.  This number resets to 1 when a user moves to a new stage.
   * @type {number}
   * @default 1
   */
  stageUnit = 1;

  /**
   * Filename of a picture of the user
   * @type {string}
   * @default ''
   */
  photoFilename = '';

  /**
   * Creates a user object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated user object
   * @param {Object} data
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

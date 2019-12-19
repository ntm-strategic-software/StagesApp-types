const { CLAStage, UserRestrictions } = require('./constants');

/**
 * Class representing a user
 */
class User {

  /**
   * Unique ID for the user
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * ISO Date of when the user was last selected/created/updated
   * @type {string}
   * @default ''
   */
  dateLastUsed = '';

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
   * UserRestrictions value that determines what the user can do
   * @type {UserRestrictions|string}
   * @default ''
   */
  restrictions = '';

  /**
   * User's current CLA stage
   * @type {CLAStage|string}
   * @default CLAStage.STAGE_1
   */
  claStage = CLAStage.STAGE_1;

  /**
   * Stage month number of the user
   * @type {number}
   * @default 1
   */
  stageMonth = 1;

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
      ...data
    });
  }
}

module.exports = User;

import { CLAStage } from './constants';

/**
 * Class representing a user
 */
class User {

  /**
   * Unique ID for the user
   * @type {string}
   * @default ''
   */
  _id ='';

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
   * User's favorite people (they show at the top of the list when selecting helpers)
   * @type {Array}
   * @default []
   */
  favoritePersonIds = [];

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

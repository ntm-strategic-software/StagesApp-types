/**
 * Class representing a tag
 */
class Tag {

  /**
   * Unique ID for the tag
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Text of the tag
   * @type {string}
   */
  tagText = '';

  /**
   * Creates a tag
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated tag
   * @param {Object} data
   * @returns {Tag}
   */
  set(data) {
    return new Tag({
      ...this,
      ...data
    });
  }

}

module.exports = Tag;

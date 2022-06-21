/**
 * Class representing a tag.  Tags are a plain text filing system the user can create if they want.
 * Users may prefix sets of tags with special characters, so groups of tags will appear together
 * when all tags are listed alphabetically.
 *
 * We may ship with some default tags, for example, a set of grammar tags
 */
class Tag {

  /**
   * Text of the tag
   * @type {string}
   */
  tagText = '';

  /**
   * Creates a Tag object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Tag object
   * @param {Object} data
   * @returns {Tag}
   */
  set(data) {
    return new Tag({
      ...this,
      ...data,
    });
  }

}

module.exports = Tag;

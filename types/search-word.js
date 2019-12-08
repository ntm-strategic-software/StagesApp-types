/**
 * Class representing a search word
 */
class SearchWord {

  /**
   * Unique ID for the search word
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Text of the search word
   * @type {string}
   */
  word = '';

  /**
   * Creates a search word
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated search word
   * @param {Object} data
   * @returns {SearchWord}
   */
  set(data) {
    return new SearchWord({
      ...this,
      ...data
    });
  }

}

module.exports = SearchWord;

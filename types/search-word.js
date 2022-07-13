/**
 * Class representing a search word, which is a word or phrase the user enters and links to something they want to find
 * by using that word or phrase
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
   * Creates a SearchWord object
   * @param {SearchWord|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated SearchWord object
   * @param {SearchWord|Object} data
   * @returns {SearchWord}
   */
  set(data) {
    return new SearchWord({
      ...this,
      ...data,
    });
  }

}

module.exports = SearchWord;

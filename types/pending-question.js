class PendingQuestion {

  /**
   * Unique ID for the PendingQuestion
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Question text
   * @type {string}
   * @default ''
   */
  text = '';

  /**
   * ID of linked culture event/dre
   * @type {string}
   * @default ''
   */
  linkedFile = '';

  /**
   * Creates a PendingQuestion Object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated PendingQuestion Object
   * @param {Object} data
   * @returns {PendingQuestion}
   */
  set(data = {}) {
    return new PendingQuestion({
      ...this,
      ...data,
    });
  }

}

module.exports = PendingQuestion;

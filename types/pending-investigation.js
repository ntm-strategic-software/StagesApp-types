/**
 * An idea or question the user has, optionally associated with a CLAFile
 */
class PendingInvestigation {

  /**
   * Unique ID for the PendingInvestigation
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Idea/Question plain text
   * @type {string}
   * @default ''
   */
  text = '';

  /**
   * ID of linked CLAFile
   * @type {string}
   * @default ''
   */
  linkedFile = '';

  /**
   * Creates a PendingInvestigation object
   * @param {PendingInvestigation|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated PendingInvestigation object
   * @param {PendingInvestigation|Object} data
   * @returns {PendingInvestigation}
   */
  set(data = {}) {
    return new PendingInvestigation({
      ...this,
      ...data,
    });
  }

}

module.exports = PendingInvestigation;

/**
 * Class representing an Outline Item
 */
class OutlineItem {

  /**
   * Unique ID for the Outline Item
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Number for sorting
   * @type {number}
   * @default 0
   */
  number = 0;

  /**
   * Outline Item code
   * @type {string}
   * @default ''
   */
  code = '';

  /**
   * Outline Item text
   * @type {string}
   * @default ''
   */
  text = '';

  /**
   * Creates an Outline Item Object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated OutlineItem Object
   * @param {Object} data
   * @returns {OutlineItem}
   */
  set(data) {
    return new OutlineItem({
      ...this,
      ...data
    });
  }

}

module.exports = OutlineItem;

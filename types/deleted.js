/**
 * Class representing a deleted item
 */
class Deleted {

  /**
   * ID of the deleted item
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Name of the table the item was deleted from
   * @type {string}
   * @default ''
   */
  table = '';

  /**
   * Date the item was deleted
   * @type {string}
   * @default ''
   */
  date = '';

  /**
   * Creates a deleted instance
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated deleted instance
   * @param {Object} data
   * @returns {Deleted}
   */
  set(data) {
    return new Deleted({
      ...this,
      ...data
    });
  }

}

module.exports = Deleted;

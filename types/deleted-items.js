/**
 * Class representing a deleted item, so when mobile and desktop sync the right thing will happen.
 */
class DeletedItems {

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
   * Creates a deleted item instance
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated deleted item instance
   * @param {Object} data
   * @returns {DeletedItems}
   */
  set(data) {
    return new DeletedItems({
      ...this,
      ...data,
    });
  }

}

module.exports = DeletedItems;

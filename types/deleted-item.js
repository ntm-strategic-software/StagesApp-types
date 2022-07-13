/**
 * Class representing a deleted item, so when mobile and desktop sync the right thing will happen.
 */
class DeletedItem {

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
   * Creates a DeletedItem object
   * @param {DeletedItem|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated DeletedItem object
   * @param {DeletedItem|Object} data
   * @returns {DeletedItem}
   */
  set(data) {
    return new DeletedItem({
      ...this,
      ...data,
    });
  }

}

module.exports = DeletedItem;

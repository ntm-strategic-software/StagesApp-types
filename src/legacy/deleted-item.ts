import { DeletedItem as DeletedItemInterface, deletedItemDefaults } from '../deleted-item';

/**
 * Class representing a deleted item, so when mobile and desktop sync the right thing will happen.
 */
export class DeletedItem {

  /**
   * ID of the deleted item
   */
  _id: string;

  /**
   * Name of the table the item was deleted from
   */
  table: string;

  /**
   * Date the item was deleted
   */
  date: string;

  /**
   * Creates a DeletedItem object
   */
  constructor(data?: DeletedItemInterface) {
    const defaults = deletedItemDefaults();
    this._id = data?._id || defaults._id;
    this.table = data?.table || defaults.table;
    this.date = data?.date || defaults.date;
  }

  /**
   * Creates an updated DeletedItem object
   */
  set(data: Partial<DeletedItemInterface>) {
    return new DeletedItem({
      ...this,
      ...data,
    });
  }

}

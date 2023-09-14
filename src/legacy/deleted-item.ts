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
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Creates a DeletedItem object
   */
  constructor(data?: DeletedItemInterface) {
    const defaults = deletedItemDefaults();
    this._id = data?._id || defaults._id;
    this.table = data?.table || defaults.table;
    this.date = data?.date || defaults.date;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
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

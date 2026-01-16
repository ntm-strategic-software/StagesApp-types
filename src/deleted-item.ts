/** Represents a deleted item, so when mobile and desktop sync the right thing will happen */
export interface DeletedItem {
  /** ID of the deleted item */
  _id: string
  /** Name of the table the item was deleted from */
  table: string
  /** Date the item was deleted */
  date: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewDeletedItem is DeletedItem with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewDeletedItem extends Omit<DeletedItem, 'createdAt' | 'updatedAt'> {
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database.
   * If not provided, it should be set when the row is created in the database.
   */
  createdAt?: string
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database.
   * If not provided, it should be set when the row is updated in the database.
   */
  updatedAt?: string
}

/** Returns a new DeletedItem object with default values */
export const deletedItemDefaults = (): DeletedItem => ({
  _id: '',
  table: '',
  date: '',
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for DeletedItem */
export interface DeletedItemHelper {
  set(item: DeletedItem, data: Partial<DeletedItem>): DeletedItem
}
/** Object with helper methods for DeletedItem */
export const deletedItemHelper: DeletedItemHelper = {
  /** Creates an updated DeletedItem object by merging an existing DeletedItem object with new values */
  set(item: DeletedItem, data: Partial<DeletedItem>): DeletedItem {
    return {
      ...item,
      ...data,
    };
  },
};

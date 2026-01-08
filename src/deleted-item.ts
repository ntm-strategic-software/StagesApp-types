export interface DeletedItem {
  _id: string
  table: string
  date: string
  createdAt: string
  updatedAt: string
}

export interface NewDeletedItem extends Omit<DeletedItem, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

export const deletedItemDefaults = (): DeletedItem => ({
  _id: '',
  table: '',
  date: '',
  createdAt: '',
  updatedAt: '',
});

export interface DeletedItemHelper {
  set(item: DeletedItem, data: Partial<DeletedItem>): DeletedItem
}
export const deletedItemHelper = {
  /**
   * Creates an updated DeletedItem object
   */
  set(item: DeletedItem, data: Partial<DeletedItem>): DeletedItem {
    return {
      ...item,
      ...data,
    };
  },
};

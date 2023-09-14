export interface DeletedItem {
  _id: string
  table: string
  date: string
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

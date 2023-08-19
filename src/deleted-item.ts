export interface DeletedItem {
  _id: string
  table: string
  date: string
}
export const deletedItemDefaults = (): DeletedItem => ({
  _id: '',
  table: '',
  date: '',
});

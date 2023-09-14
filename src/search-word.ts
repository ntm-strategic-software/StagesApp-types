export interface SearchWord {
  _id: string
  word: string
  createdAt?: string
  updatedAt?: string
}
export const searchWordDefaults = (): SearchWord => ({
  _id: '',
  word: '',
  createdAt: '',
  updatedAt: '',
});

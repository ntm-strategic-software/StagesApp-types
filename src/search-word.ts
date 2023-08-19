export interface SearchWord {
  _id: string
  word: string
}
export const searchWordDefaults = (): SearchWord => ({
  _id: '',
  word: '',
});

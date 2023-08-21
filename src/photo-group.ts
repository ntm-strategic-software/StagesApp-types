export interface PhotoGroup {
  _id: string
  title: string
  filenames: string[]
}
export const photoGroupDefaults = (): PhotoGroup => ({
  _id: '',
  title: '',
  filenames: [],
});

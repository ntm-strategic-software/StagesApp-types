export interface PhotoGroup {
  _id: string
  title: string
  filenames: string[]
  createdAt?: string
  updatedAt?: string
}
export const photoGroupDefaults = (): PhotoGroup => ({
  _id: '',
  title: '',
  filenames: [],
  createdAt: '',
  updatedAt: '',
});

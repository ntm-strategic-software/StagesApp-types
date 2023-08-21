export interface User {
  _id: string
  name: string
  fullName: string
  photoFilename: string
  claUnit: number
}
export const userDefaults = (): User => ({
  _id: '',
  name: '',
  fullName: '',
  photoFilename: '',
  claUnit: 1,
});

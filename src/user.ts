export interface User {
  _id: string
  name: string
  fullName: string
  photoFilename: string
  claUnit: number
  createdAt?: string
  updatedAt?: string
}
export const userDefaults = (): User => ({
  _id: '',
  name: '',
  fullName: '',
  photoFilename: '',
  claUnit: 1,
  createdAt: '',
  updatedAt: '',
});

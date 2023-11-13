export interface Person {
  _id: string
  name: string
  fullName: string
  birthday: string
  sex: string
  note: string
  dateLastUsedOnMobile: string
  deceased: boolean
  photoFilename: string
  createdAt?: string
  updatedAt?: string
}
export const personDefaults = (): Person => ({
  _id: '',
  name: '',
  fullName: '',
  birthday: '',
  sex: '',
  note: '',
  dateLastUsedOnMobile: '',
  deceased: false,
  photoFilename: '',
  createdAt: '',
  updatedAt: '',
});

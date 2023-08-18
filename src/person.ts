export interface Person {
  _id: string
  name: string
  fullName: string
  description: string
  birthday: string
  sex: string
  note: string
  dateLastUsedOnMobile: string
  deceased: boolean
  photoFilename: string
}
export const personDefaults = (): Person => ({
  _id: '',
  name: '',
  fullName: '',
  description: '',
  birthday: '',
  sex: '',
  note: '',
  dateLastUsedOnMobile: '',
  deceased: false,
  photoFilename: '',
});

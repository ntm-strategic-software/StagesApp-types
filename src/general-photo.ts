export interface GeneralPhoto {
  _id: string
  cultureEvent: string
  startTime: number
  filename: string
  createdAt?: string
  updatedAt?: string
}
export const generalPhotoDefaults = (): GeneralPhoto => ({
  _id: '',
  cultureEvent: '',
  startTime: 0,
  filename: '',
  createdAt: '',
  updatedAt: '',
});

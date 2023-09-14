export interface SALocation {
  _id: string
  name: string
  note: string
  dateLastUsedOnMobile: string
  createdAt?: string
  updatedAt?: string
}
export const saLocationDefaults = (): SALocation => ({
  _id: '',
  name: '',
  note: '',
  dateLastUsedOnMobile: '',
  createdAt: '',
  updatedAt: '',
});

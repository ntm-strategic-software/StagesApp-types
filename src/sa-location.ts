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

export interface SALocationHelper {
  set(loc: SALocation, data: Partial<SALocation>): SALocation
}
export const saLocationHelper = {
  /**
   * Creates an updated SALocation object
   */
  set(loc: SALocation, data: Partial<SALocation>): SALocation {
    return {
      ...loc,
      ...data,
    };
  },
};

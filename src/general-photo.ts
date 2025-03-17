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

export interface GeneralPhotoHelper {
  set(photo: GeneralPhoto, data: Partial<GeneralPhoto>): GeneralPhoto
}
export const generalPhotoHelper = {
  /**
   * Creates an updated GeneralPhoto object
   */
  set(photo: GeneralPhoto, data: Partial<GeneralPhoto>): GeneralPhoto {
    return {
      ...photo,
      ...data,
    };
  },
};

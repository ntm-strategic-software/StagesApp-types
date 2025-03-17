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

export interface PhotoGroupHelper {
  set(item: PhotoGroup, data: Partial<PhotoGroup>): PhotoGroup
}
export const photoGroupHelper = {
  /**
   * Creates an updated PhotoGroup object
   */
  set(item: PhotoGroup, data: Partial<PhotoGroup>): PhotoGroup {
    return {
      ...item,
      ...data,
    };
  },
};

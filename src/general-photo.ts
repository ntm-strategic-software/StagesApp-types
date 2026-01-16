/**
 * Represents a photo taken as part of a General Recorder session. The GeneralRecording that the photo
 * is attached to will have the GeneralPhoto's _id in its photos array.
 *
 * For convenience, the id of the CultureEvent that the GeneralRecording is associated with is included in the GeneralPhoto,
 * so we don't have to trace back through the GeneralRecording to get to the CultureEvent.
 */
export interface GeneralPhoto {
  /** Unique identifier for the GeneralPhoto */
  _id: string
  /** ID of the culture event that this photo is associated with, for convenience */
  cultureEvent: string
  /** Time (in seconds with decimals) from the beginning of the GeneralRecording, when this photo was taken */
  startTime: number
  /** Filename of photo (no path, but does include extension) */
  filename: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewGeneralPhoto is GeneralPhoto with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewGeneralPhoto extends Omit<GeneralPhoto, 'createdAt' | 'updatedAt'> {
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database.
   * If not provided, it should be set when the row is created in the database.
   */
  createdAt?: string
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database.
   * If not provided, it should be set when the row is updated in the database.
   */
  updatedAt?: string
}

/** Returns a new GeneralPhoto object with default values */
export const generalPhotoDefaults = (): GeneralPhoto => ({
  _id: '',
  cultureEvent: '',
  startTime: 0,
  filename: '',
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for GeneralPhoto */
export interface GeneralPhotoHelper {
  set(photo: GeneralPhoto, data: Partial<GeneralPhoto>): GeneralPhoto
}
/** Object with helper methods for GeneralPhoto */
export const generalPhotoHelper: GeneralPhotoHelper = {
  /** Creates an updated GeneralPhoto object by merging an existing GeneralPhoto object with new values */
  set(photo: GeneralPhoto, data: Partial<GeneralPhoto>): GeneralPhoto {
    return {
      ...photo,
      ...data,
    };
  },
};

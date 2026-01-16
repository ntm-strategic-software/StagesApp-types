/**
 * Represents a group (0 or more) photos.
 */
export interface PhotoGroup {
  /** Unique ID for the PhotoGroup */
  _id: string
  /** Title of the PhotoGroup */
  title: string
  /** Filenames, in order to display, of the photos in this PhotoGroup (no path, but does include extension) */
  filenames: string[]
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewPhotoGroup is PhotoGroup with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewPhotoGroup extends Omit<PhotoGroup, 'createdAt' | 'updatedAt'> {
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

/** Returns a new PhotoGroup object with default values */
export const photoGroupDefaults = (): PhotoGroup => ({
  _id: '',
  title: '',
  filenames: [],
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for PhotoGroup */
export interface PhotoGroupHelper {
  set(item: PhotoGroup, data: Partial<PhotoGroup>): PhotoGroup
}
/** Object with helper methods for PhotoGroup */
export const photoGroupHelper: PhotoGroupHelper = {
  /** Creates an updated PhotoGroup object by merging an existing PhotoGroup object with new values */
  set(item: PhotoGroup, data: Partial<PhotoGroup>): PhotoGroup {
    return {
      ...item,
      ...data,
    };
  },
};

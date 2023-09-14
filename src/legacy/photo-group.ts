import { PhotoGroup as PhotoGroupInterface, photoGroupDefaults } from '../photo-group';

/**
 * Class representing a group (0 or more) photos.
 */
export class PhotoGroup implements PhotoGroupInterface {

  /**
   * Unique ID for the PhotoGroup.
   */
  _id: string;

  /**
   * Title of the PhotoGroup.
   */
  title: string;

  /**
   * Filenames, in order to display, of the photos in this PhotoGroup (no path, but does include extension).
   */
  filenames: string[];

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Constructs an PhotoGroup object
   */
  constructor(data?: PhotoGroupInterface) {
    const defaults = photoGroupDefaults();
    this._id = data?._id || defaults._id;
    this.title = data?.title || defaults.title;
    this.filenames = data?.filenames || defaults.filenames;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated PhotoGroup object
   */
  set(data: Partial<PhotoGroup>) {
    return new PhotoGroup({
      ...this,
      ...data,
    });
  }

}

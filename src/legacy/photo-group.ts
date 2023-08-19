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
   * Constructs an PhotoGroup object
   */
  constructor(data?: PhotoGroupInterface) {
    const defaults = photoGroupDefaults();
    this._id = data?._id || defaults._id;
    this.title = data?.title || defaults.title;
    this.filenames = data?.filenames || defaults.filenames;
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

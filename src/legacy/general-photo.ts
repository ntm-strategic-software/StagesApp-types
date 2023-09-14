import { GeneralPhoto as GeneralPhotoInterface, generalPhotoDefaults } from '../general-photo';

/**
 * Class representing a photo taken as part of a General Recorder session.  The GeneralRecording that the photo
 * is attached to will have the GeneralPhoto's _id in its photos array.
 *
 * For convenience, the id of the CultureEvent that the GeneralRecording is associated with is included in the GeneralPhoto,
 * so we don't have to trace back through the GeneralRecording to get to the CultureEvent.
 */
export class GeneralPhoto implements GeneralPhotoInterface {

  /**
   * Unique ID for the General Photo
   */
  _id: string

  /**
   * ID of the culture event that this photo is associated with, for convenience
   */
  cultureEvent: string

  /**
   * Time (in seconds with decimals) from the beginning of the GeneralRecording, when this photo was taken
   */
  startTime: number

  /**
   * Filename of photo (no path, but does include extension)
   */
  filename: string

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Creates a GeneralPhoto object
   */
  constructor(data?: GeneralPhotoInterface) {
    const defaults = generalPhotoDefaults();
    this._id = data?._id || defaults._id;
    this.cultureEvent = data?.cultureEvent || defaults.cultureEvent;
    this.startTime = data?.startTime || defaults.startTime;
    this.filename = data?.filename || defaults.filename;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated GeneralPhoto object
   */
  set(data: Partial<GeneralPhotoInterface> ) {
    return new GeneralPhoto({
      ...this,
      ...data,
    });
  }
}

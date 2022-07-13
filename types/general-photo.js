/**
 * Class representing a photo taken as part of a General Recorder session.  The GeneralRecording that the photo
 * is attached to will have the GeneralPhoto's _id in its photos array.
 *
 * For convenience, the id of the CultureEvent that the GeneralRecording is associated with is included in the GeneralPhoto,
 * so we don't have to trace back through the GeneralRecording to get to the CultureEvent.
 */
class GeneralPhoto {

  /**
   * Unique ID for the General Photo
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * ID of the culture event that this photo is associated with, for convenience
   * @type {string}
   * @default ''
   */
  cultureEvent = '';

  /**
   * Time (in seconds with decimals) from the beginning of the GeneralRecording, when this photo was taken
   * @type {number}
   * @default 0
   */
  startTime = 0;

  /**
   * Filename of photo (no path, but does include extension)
   * @type {string}
   * @default ''
   */
  filename = '';

  /**
   * Creates a GeneralPhoto object
   * @param {GeneralPhoto|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated GeneralPhoto object
   * @param {GeneralPhoto|Object} data
   * @returns {GeneralPhoto}
   */
  set(data = {}) {
    return new GeneralPhoto({
      ...this,
      ...data,
    });
  }
}

module.exports = GeneralPhoto;

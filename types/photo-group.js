/**
 * Class representing a group (0 or more) photos.
 */
class PhotoGroup {
  /**
   * Unique ID for the PhotoGroup.
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Title of the PhotoGroup.
   * @type {string}
   * @default ''
   */
  title = '';

  /**
   * Filenames, in order to display, of the photos in this PhotoGroup (no path, but does include extension).
   * @type {string[]}
   * @default ''
   */
  filenames = [];

  /**
   * Constructs an PhotoGroup object
   * @param {PhotoGroup|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated PhotoGroup object
   * @param {PhotoGroup|Object} data
   * @returns {PhotoGroup}
   */
  set(data) {
    return new PhotoGroup({
      ...this,
      ...data,
    });
  }

}

module.exports = PhotoGroup;

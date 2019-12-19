class GeneralPhoto {

  /**
   * Unique ID for the General Photo
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * ID of culture event
   * @type {string}
   * @default ''
   */
  cultureEvent = '';

  /**
   * Time of photo start
   * @type {number}
   * @default 0
   */
  startTime = 0;

  /**
   * Time of photo end
   * @type {number}
   * @default 0
   */
  endTime = 0;

  /**
   * Filename of photo
   * @type {string}
   * @default ''
   */
  filename = '';

  /**
   * Creates a General Photo Object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated General Photo Object
   * @param {Object} data
   * @returns {GeneralPhoto}
   */
  set(data = {}) {
    return new GeneralPhoto({
      ...this,
      ...data
    });
  }

}

module.exports = GeneralPhoto;

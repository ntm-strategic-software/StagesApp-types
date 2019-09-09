class RecordingPhoto {

  /**
   * Unique ID for the Recording Photo
   * @type {string}
   * @default ''
   */
  _id = '';

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
   * Creates a Recording Photo Object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Recording Photo Object
   * @param {Object} data
   * @returns {RecordingPhoto}
   */
  set(data = {}) {
    return new RecordingPhoto({
      ...this,
      ...data
    });
  }

}

module.exports = RecordingPhoto;

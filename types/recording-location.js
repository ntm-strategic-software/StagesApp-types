/**
 * Class representing a recording location
 */
class RecordingLocation {

  /**
   * Unique ID for the recording location
   * @type {string}
   * @default ''
   */
  _id ='';

  /**
   * Name of the recording location
   * @type {string}
   * @default ''
   */
  name = '';

  /**
   * Any notes about the location
   * @type {string}
   * @default ''
   */
  note = '';

  /**
   * Creates a recording location
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated recording location
   * @param {Object} data
   * @returns {RecordingLocation}
   */
  set(data) {
    return new RecordingLocation({
      ...this,
      ...data
    });
  }

}

module.exports = RecordingLocation;

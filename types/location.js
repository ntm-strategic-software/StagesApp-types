/**
 * Class representing a recording location
 */
class Location {

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
   * ISO date of last event involving location
   * @type {string}
   * @default ''
   */
  dateLastUsed = '';

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
   * @returns {Location}
   */
  set(data) {
    return new Location({
      ...this,
      ...data
    });
  }

}

module.exports = Location;

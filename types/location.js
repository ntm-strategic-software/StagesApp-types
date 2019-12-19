/**
 * Class representing a location
 */
class Location {

  /**
   * Unique ID for the location
   * @type {string}
   * @default ''
   */
  _id ='';

  /**
   * Name of the location
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
   * Creates a location
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated location
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

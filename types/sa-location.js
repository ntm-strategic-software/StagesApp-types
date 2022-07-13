/**
 * Class representing a StagesApp location (not to be confused with the `Location` global object in browsers and Electron)
 */
class SALocation {

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
   * ISO date string (e.g., '2022-06-20T15:50:40.055Z'), when user on Mobile last edited this location or added this location to a CultureEvent
   * @type {string}
   * @default ''
   */
  dateLastUsedOnMobile = '';

  /**
   * Creates an SALocation object
   * @param {SALocation|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated SALocation object
   * @param {SALocation|Object} data
   * @returns {SALocation}
   */
  set(data) {
    return new SALocation({
      ...this,
      ...data,
    });
  }

}

module.exports = SALocation;

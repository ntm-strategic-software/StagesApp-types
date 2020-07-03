/**
 * Class representing a marker
 */
class Marker {

  /**
   * Unique ID for the marker
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
   * Time where the marker begins
   * @type {number}
   * @default 0
   */
  startTime = 0;

  /**
   * Time where the marker ends
   * @type {number}
   * @default 0
   */
  endTime = 0;

  /**
   * Note about the marker
   * @type {string}
   * @default ''
   */
  note = '';

  /**
   * Type of the marker
   * @type {MarkerType}
   * @default ''
   */
  type = '';

  /**
   * Array of IDs of search words
   * @type {string[]}
   * @default []
   */
  searchWords = [];

  /**
   * Array of Outline Item IDs
   * @type {string[]}
   * @default []
   */
  outlineItems = [];

  /**
   * Creates a marker
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated marker
   * @param {Object} data
   * @returns {Marker}
   */
  set(data) {
    return new Marker({
      ...this,
      ...data
    });
  }

}

module.exports = Marker;

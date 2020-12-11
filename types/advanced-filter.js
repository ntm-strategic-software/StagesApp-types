/**
 * Class representing an Advanced Filter
 */
class AdvancedFilter {

  /**
   * Unique ID for the Advanced Filter
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * @type {string}
   */
  createdAt = '';

  /**
   * @type {string}
   */
  updatedAt = '';

  /**
   * User ID of who created this Advanced Filter
   * @type {string}
   * @default ''
   */
  user = '';

  /**
   * Serialized advanced filter object
   * @type {string}
   */
  filter = '';

  /**
   * Id of the culture event most recently selected while this advanced filter is active.
   * @type {string}
   */
  selectedCultureEventId = '';

  /**
   * Constructs an Advanced Filter
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Advanced Filter
   * @param {Object} data
   * @returns {AdvancedFilter}
   */
  set(data) {
    return new AdvancedFilter({
      ...this,
      ...data
    });
  }

}

module.exports = AdvancedFilter;

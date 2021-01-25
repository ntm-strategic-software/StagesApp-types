const { AdvancedFilterType } = require('./constants');

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
   * type of filter
   * @type {AdvancedFilterType|string}
   * @default AdvancedFilterType.NORMAL_FILTER
   */
  filterType = AdvancedFilterType.NORMAL_FILTER;

  /**
   * Id of the item (culture event, transcription) most recently selected while this advanced filter is active.
   * @type {string}
   */
  selectedItemId = '';

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

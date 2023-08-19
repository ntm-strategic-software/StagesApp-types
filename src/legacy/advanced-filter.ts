import { AdvancedFilter as AdvancedFilterInterface, advancedFilterDefaults } from '../advanced-filter';
import { AdvancedFilterType } from '../constants';

/**
 * Class representing an Advanced Filter
 */
export class AdvancedFilter implements AdvancedFilterInterface {

  /**
   * Unique ID for the Advanced Filter
   */
  _id: string;

  /**
   * Serialized advanced filter object
   */
  filter: string;

  /**
   * type of filter
   */
  filterType: AdvancedFilterType;

  /**
   * Id of the item (culture event, transcription) most recently selected while this advanced filter is active.
   */
  selectedItemId: string;

  /**
   * Constructs an AdvancedFilter object
   */
  constructor(data?: AdvancedFilterInterface) {
    const defaults = advancedFilterDefaults();
    this._id = data?._id || defaults._id;
    this.filter = data?.filter || defaults.filter;
    this.filterType = data?.filterType || defaults.filterType;
    this.selectedItemId = data?.selectedItemId || defaults.selectedItemId;
  }

  /**
   * Creates an updated AdvancedFilter object
   */
  set(data: Partial<AdvancedFilterInterface>) {
    return new AdvancedFilter({
      ...this,
      ...data,
    });
  }

}

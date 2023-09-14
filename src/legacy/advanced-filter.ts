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
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Constructs an AdvancedFilter object
   */
  constructor(data?: AdvancedFilterInterface) {
    const defaults = advancedFilterDefaults();
    this._id = data?._id || defaults._id;
    this.filter = data?.filter || defaults.filter;
    this.filterType = data?.filterType || defaults.filterType;
    this.selectedItemId = data?.selectedItemId || defaults.selectedItemId;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
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

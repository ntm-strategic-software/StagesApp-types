import { AdvancedFilterType } from './constants';

/** structure of an advanced filter that is saved to the database */
export interface AdvancedFilter {
  /** Unique identifier for the AdvancedFilter */
  _id: string
  /** Serialized advanced filter object */
  filter: string
  /** Type of the advanced filter */
  filterType: AdvancedFilterType
  /** Id of the item (culture event, transcription) most recently selected while this advanced filter is active. */
  selectedItemId: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewAdvancedFilter is AdvancedFilter with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewAdvancedFilter extends Omit<AdvancedFilter, 'createdAt' | 'updatedAt'> {
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database.
   * If not provided, it should be set when the row is created in the database.
   */
  createdAt?: string
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database.
   * If not provided, it should be set when the row is updated in the database.
   */
  updatedAt?: string
}

/** Returns a new AdvancedFilter object with default values */
export const advancedFilterDefaults = (): AdvancedFilter => ({
  _id: '',
  filter: '',
  filterType: AdvancedFilterType.NORMAL_FILTER,
  selectedItemId: '',
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for AdvancedFilter */
export interface AdvancedFilterHelper {
  set(advancedFilter: AdvancedFilter, data: Partial<AdvancedFilter>): AdvancedFilter
}
/** Object with helper methods for AdvancedFilter */
export const advancedFilterHelper = {
  /**
   * Creates an updated AdvancedFilter object
   */
  set(advancedFilter: AdvancedFilter, data: Partial<AdvancedFilter>): AdvancedFilter {
    return {
      ...advancedFilter,
      ...data,
    };
  },
};

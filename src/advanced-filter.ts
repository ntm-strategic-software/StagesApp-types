import { AdvancedFilterType } from './constants';

export interface AdvancedFilter {
  _id: string
  filter: string
  filterType: AdvancedFilterType
  selectedItemId: string
  createdAt: string
  updatedAt: string
}

export interface NewAdvancedFilter extends Omit<AdvancedFilter, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}
export const advancedFilterDefaults = (): AdvancedFilter => ({
  _id: '',
  filter: '',
  filterType: AdvancedFilterType.NORMAL_FILTER,
  selectedItemId: '',
  createdAt: '',
  updatedAt: '',
});

export interface AdvancedFilterHelper {
  set(advancedFilter: AdvancedFilter, data: Partial<AdvancedFilter>): AdvancedFilter
}
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

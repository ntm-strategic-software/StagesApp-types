import { AdvancedFilterType } from './constants';

export interface AdvancedFilter {
  _id: string
  filter: string
  filterType: AdvancedFilterType
  selectedItemId: string
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

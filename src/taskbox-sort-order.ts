export interface TaskboxSortOrder {
  _id: string
  PLAN: string[]
  PROCESS: string[]
  COMMUNITY: string[]
  HELPER: string[]
  createdAt?: string
  updatedAt?: string
}
export const taskboxSortOrderDefaults = (): TaskboxSortOrder => ({
  _id: '',
  PLAN: [],
  PROCESS: [],
  COMMUNITY: [],
  HELPER: [],
  createdAt: '',
  updatedAt: '',
});

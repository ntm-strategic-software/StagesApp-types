export interface TaskboxSortOrder {
  _id: string
  PLAN: string[]
  PROCESS: string[]
  COMMUNITY: string[]
  HELPER: string[]
  createdAt: string
  updatedAt: string
}

export interface NewTaskboxSortOrder extends Omit<TaskboxSortOrder, 'createdAt' | 'updatedAt'> {
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

export interface TaskboxSortOrderHelper {
  set(tso: TaskboxSortOrder, data: Partial<TaskboxSortOrder>): TaskboxSortOrder
}
export const taskboxSortOrderHelper = {
  /**
   * Creates an updated TaskboxSortOrder object
   */
  set(tso: TaskboxSortOrder, data: Partial<TaskboxSortOrder>): TaskboxSortOrder {
    return {
      ...tso,
      ...data,
    };
  },
};

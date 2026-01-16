/**
 * Represents the order tasks should be displayed in all TaskBoxes. Since completing a Task causes
 * the associated ActivityPlan._id to be removed from one TaskBox and added to another TaskBox, it seems best
 * to keep all TaskBoxes together in a single doc, to prevent TaskBoxes from getting out of sync.
 *
 * So, the table represented by this interface will have only one row.
 *
 * Each Task Box has an array of activityPlan._id's, in the order to display the activityPlan's next task.
 * This works because an activity plan can never have more than one next task, so an activity plan can only
 * exist once in this table. When the final task for an activity plan is completed, the activity plan's _id is
 * removed from this table.
 *
 * TaskBox names are all caps to match the TaskBox enum.
 */
export interface TaskboxSortOrder {
  /** Unique ID. There will be only one record, but _id is included for convenience when using methods that require an _id. */
  _id: string
  /** Plan sort order: array of IDs of ActivityPlans, in the sorted order. For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex). */
  PLAN: string[]
  /** Process sort order: array of IDs of ActivityPlans, in the sorted order. For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex). */
  PROCESS: string[]
  /** Community sort order: array of IDs of ActivityPlans, in the sorted order. For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex). */
  COMMUNITY: string[]
  /** Helper sort order: array of IDs of ActivityPlans, in the sorted order. For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex). */
  HELPER: string[]
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewTaskboxSortOrder is TaskboxSortOrder with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewTaskboxSortOrder extends Omit<TaskboxSortOrder, 'createdAt' | 'updatedAt'> {
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

/** Returns a new TaskboxSortOrder object with default values */
export const taskboxSortOrderDefaults = (): TaskboxSortOrder => ({
  _id: '',
  PLAN: [],
  PROCESS: [],
  COMMUNITY: [],
  HELPER: [],
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for TaskboxSortOrder */
export interface TaskboxSortOrderHelper {
  set(tso: TaskboxSortOrder, data: Partial<TaskboxSortOrder>): TaskboxSortOrder
}
/** Object with helper methods for TaskboxSortOrder */
export const taskboxSortOrderHelper: TaskboxSortOrderHelper = {
  /** Creates an updated TaskboxSortOrder object by merging an existing TaskboxSortOrder object with new values */
  set(tso: TaskboxSortOrder, data: Partial<TaskboxSortOrder>): TaskboxSortOrder {
    return {
      ...tso,
      ...data,
    };
  },
};

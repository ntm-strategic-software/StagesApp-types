import { TaskboxSortOrder as TaskboxSortOrderInterface, taskboxSortOrderDefaults } from '../taskbox-sort-order';

/**
 * Class representing the order tasks should be displayed in all TaskBoxes.  Since completing a Task causes
 * the associated ActivityPlan._id to be removed from one TaskBox and added to another TaskBox, it seems best
 * to keep all TaskBoxes together in a single doc, to prevent TaskBoxes from getting out of sync.
 *
 * So, the table represented by this class will have only one row.
 *
 * Each Task Box has an array of activityPlanId's, in the order to display the activityPlan's next task.
 * This works because an activity plan can never have more than one next task, so an activity plan can only
 * exist once in this table.  When the final task for an activity plan is completed, the activity plan id is
 * removed from this table.
 *
 * TaskBox names are all caps to match the TaskBox enum.
 */
export class TaskBoxSortOrder implements TaskboxSortOrderInterface {
  /**
   * Unique ID.  There will be only one record, but I include the _id for convenience when using methods that require an _id.
   */
  _id: string;

  /**
   * Plan sort order:  array of IDs of ActivityPlans, in the sorted order.
   * For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex).
   */
  PLAN: string[];

  /**
   * Process sort order:  array of IDs of ActivityPlans, in the sorted order.
   * For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex).
   */
  PROCESS: string[];

  /**
   * Community sort order:  array of IDs of ActivityPlans, in the sorted order.
   * For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex).
   */
  COMMUNITY: string[];

  /**
   * Helper sort order:  array of IDs of ActivityPlans, in the sorted order.
   * For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex).
   */
  HELPER: string[];

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Creates a TaskBoxSortOrder object
   */
  constructor(data?: TaskboxSortOrderInterface) {
    const defaults = taskboxSortOrderDefaults();
    this._id = data?._id || defaults._id;
    this.PLAN = data?.PLAN || defaults.PLAN;
    this.PROCESS = data?.PROCESS || defaults.PROCESS;
    this.COMMUNITY = data?.COMMUNITY || defaults.COMMUNITY;
    this.HELPER = data?.HELPER || defaults.HELPER;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated TaskBoxSortOrder object
   */
  set(data: Partial<TaskboxSortOrderInterface>) {
    return new TaskBoxSortOrder({
      ...this,
      ...data,
    });
  }

}

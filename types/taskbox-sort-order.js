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
class TaskBoxSortOrder {
  /**
   * Unique ID.  There will be only one record, but I include the _id for convenience when using methods that require an _id.
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Plan sort order:  array of IDs of ActivityPlans, in the sorted order.
   * For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex).
   * @type {string[]}
   * @default []
   */
  PLAN = [];

  /**
   * Process sort order:  array of IDs of ActivityPlans, in the sorted order.
   * For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex).
   * @type {string[]}
   * @default []
   */
  PROCESS = [];

  /**
   * Community sort order:  array of IDs of ActivityPlans, in the sorted order.
   * For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex).
   * @type {string[]}
   * @default []
   */
  COMMUNITY = [];

  /**
   * Helper sort order:  array of IDs of ActivityPlans, in the sorted order.
   * For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex).
   * @type {string[]}
   * @default []
   */
  HELPER = [];

  /**
   * Creates a TaskBoxSortOrder object
   * @param {TaskBoxSortOrder|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated TaskBoxSortOrder object
   * @param {TaskBoxSortOrder|Object} data
   * @returns {TaskBoxSortOrder}
   */
  set(data) {
    return new TaskBoxSortOrder({
      ...this,
      ...data,
    });
  }

}

module.exports = TaskBoxSortOrder;

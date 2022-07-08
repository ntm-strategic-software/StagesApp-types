/**
 * Class representing the order tasks should be displayed in a TaskBox
 */
class TaskBoxSortOrder {
  /**
   * Key of the taskBox.  E.g, 'Plan', 'Process', 'Community', or 'Helper'.  (Playlist sort order is handled differently.)
   * @type {string}
   * @default ''
   */
  taskBoxKey = '';

  /**
   * Array of IDs of ActivityPlans, in the sorted order.
   * For each ActivityPlanId, show that ActivityPlan's next task (the task indicated by activityPlan.nextTaskIndex).
   * @type {string[]}
   * @default []
   */
  activityPlanIds = [];

  /**
   * Creates a TaskBoxSortOrder object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated TaskBoxSortOrder object
   * @param {Object} data
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

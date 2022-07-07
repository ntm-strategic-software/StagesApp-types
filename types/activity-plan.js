/**
 * Class representing doing an Activity:  a plan for executing an Activity to do something specific.
 */
class ActivityPlan {
  /**
   * Unique ID for the Activity Plan
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Number of this Activity Plan.  This number is unique for all users on a desktop installation.
   * @type {number}
   */
  activityPlanNumber = 0;

  /**
   * Title of the Activity Plan
   * @type {string}
   * @default ''
   */
  activityPlanTitle = '';

  /**
   * Notes for this Activity Plan
   * @type {string}
   * @default ''
   */
  notes = '';

  /**
   * Key of the Activity that this Activity Plan is a plan for
   * @type {ActivityKey|string}
   * @default ''
   */
  activityKey = '';

  /**
   * The sequence of steps to follow to complete this Activity Plan.  Initially, these tasks will be created from
   * the Activity corresponding to activityKey.  The user may add, delete, or edit this list of tasks for this Activity Plan.
   * @type {Array}
   */
  tasks = [];

  /**
   * index into this Activity Plan's 'tasks' array of the next task waiting to be done
   * @type {number}
   */
  nextTaskIndex = 0;

  /**
   * Constructs an ActivityPlan object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated ActivityPlan object
   * @param {Object} data
   * @returns {ActivityPlan}
   */
  set(data) {
    return new ActivityPlan({
      ...this,
      ...data,
    });
  }

}

module.exports = ActivityPlan;

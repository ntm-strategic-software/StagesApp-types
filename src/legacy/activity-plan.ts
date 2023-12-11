import { ActivityPlan as ActivityPlanInterface, activityPlanDefaults } from '../activity-plan';
import { ActivityKey } from '../constants';
import { Task } from '../task';
import isNumber from 'lodash/isNumber';

/**
 * Class representing doing an Activity:  a plan for executing an Activity to do something specific.
 */
export class ActivityPlan implements ActivityPlanInterface {

  /**
   * Unique ID for the Activity Plan
   */
  _id: string;

  /**
   * Number of this Activity Plan.  This number is unique for all users on a desktop installation.
   */
  activityPlanNumber: number;

  /**
   * Title of the Activity Plan
   */
  activityPlanTitle: string;

  /**
   * Notes for this Activity Plan
   */
  notes: string;

  /**
   * Key of the Activity that this Activity Plan is a plan for
   */
  activityKey: ActivityKey|'';

  /**
   * The sequence of steps to follow to complete this Activity Plan.  Initially, these tasks will be created from
   * the Activity corresponding to activityKey.  The user may add, delete, or edit this list of tasks for this Activity Plan.
   */
  tasks: Task[];

  /**
   * index into this Activity Plan's 'tasks' array of the next task waiting to be done
   */
  nextTaskIndex: number;

  // Apparently we never used this field, so I'm commenting it out for now.  I think the purpose was for mobile to know
  //  which items have been completed since the last sync, so it can show them in the bottom section of the TaskBox screens.
  //  It appears we use a mobile-only table ActivityPlanSyncIdx instead.
  // /**
  //  * index of the last completed task that was synced.  When syncing, syncedTaskIndex is set to nextTaskIndex - 1.
  //  */
  // syncedTaskIndex: number;

  /**
   * The overall CLA unit the user was in when he created this ActivityPlan (see User.claUnit)
   */
  unitCreated: number|null;

  /**
   * The overall CLA unit the user was in when he completed this ActivityPlan (see User.claUnit)
   */
  unitCompleted: number|null;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Constructs an ActivityPlan object
   */
  constructor(data?: ActivityPlanInterface) {
    const defaults = activityPlanDefaults();
    this._id = data?._id || defaults._id;
    this.activityPlanNumber = data?.activityPlanNumber || defaults.activityPlanNumber;
    this.activityPlanTitle = data?.activityPlanTitle || defaults.activityPlanTitle;
    this.notes = data?.notes || defaults.notes;
    this.activityKey = data?.activityKey || defaults.activityKey;
    this.tasks = data?.tasks || defaults.tasks;
    this.nextTaskIndex = data?.nextTaskIndex || defaults.nextTaskIndex;
    // const syncedTaskIndex = data?.syncedTaskIndex;
    // this.syncedTaskIndex = isNumber(syncedTaskIndex) ? syncedTaskIndex : defaults.syncedTaskIndex;
    const unitCreated = data?.unitCreated;
    this.unitCreated = isNumber(unitCreated) ? unitCreated : defaults.unitCreated;
    const unitCompleted = data?.unitCompleted;
    this.unitCompleted = isNumber(unitCompleted) ? unitCompleted : defaults.unitCompleted;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated ActivityPlan object
   */
  set(data: Partial<ActivityPlanInterface>) {
    return new ActivityPlan({
      ...this,
      ...data,
    });
  }

}

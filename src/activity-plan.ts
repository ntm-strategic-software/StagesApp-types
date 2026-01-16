import { ActivityKey } from './constants';
import { Task } from './task';

/**
 * A plan for doing an activity to do something specific:  an "instance" of an activity.
 */
export interface ActivityPlan {
  /** Unique identifier for the ActivityPlan */
  _id: string
  /**  Number of this ActivityPlan.  This number is unique for all users on a desktop installation. */
  activityPlanNumber: number
  /** Title of the ActivityPlan */
  activityPlanTitle: string
  /** Notes for the ActivityPlan */
  notes: string
  /** Key of the activity this ActivityPlan is a plan for */
  activityKey: ActivityKey | ''
  /**
   * The sequence of steps to follow to complete this Activity Plan.
   * Initially, these tasks will be created from the Activity corresponding to activityKey.
   * The user may add, delete, or edit this list of tasks for this Activity Plan.
   */
  tasks: Task[]
  /** Index of the next task to be done in the tasks array */
  nextTaskIndex: number
  // Apparently we never used this field, so I'm commenting it out for now.  I think the purpose was for mobile to know
  //  which items have been completed since the last sync, so it can show them in the bottom section of the TaskBox screens.
  //  It appears we use a mobile-only table ActivityPlanSyncIdx instead.
  // /**
  //  * index of the last completed task that was synced.  When syncing, syncedTaskIndex is set to nextTaskIndex - 1.
  //  */
  // syncedTaskIndex: number
  /**
   * The CLAFile._id of the prompt for this Activity Plan.
   * This CLA File is NOT processed during this ActivityPlan
   *  (though it may have been processed in another ActivityPlan, if it was created as a main CLA File).
   *  In this ActivityPlan, it is merely used to provide background, context, etc. for the discussion that will result in the main CLA File.
   */
  promptClaFileId: string,
  /**
   * The CLAFile._id of the main CLA File for this Activity Plan.
   * This is the CLA File that gets recorded during the ActivityPlan and might be processed
   * (if this ActivityPlan has a Task directing the user to process it).
   */
  mainClaFileId: string,
  /** The overall 1-based CLA unit the user was in when he created this ActivityPlan (see User.claUnit) */
  unitCreated: number | null
  /** The overall 1-based CLA unit the user was in when he completed this ActivityPlan (see User.claUnit) */
  unitCompleted: number | null
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewActivityPlan is ActivityPlan with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewActivityPlan extends Omit<ActivityPlan, 'createdAt' | 'updatedAt'> {
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

/** Returns a new ActivityPlan object with default values */
export const activityPlanDefaults = (): ActivityPlan => ({
  _id: '',
  activityPlanNumber: 0,
  activityPlanTitle: '',
  notes: '',
  activityKey: '',
  tasks: [],
  nextTaskIndex: 0,
  // syncedTaskIndex: -1,
  promptClaFileId: '',
  mainClaFileId: '',
  unitCreated: null,
  unitCompleted: null,
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for ActivityPlan */
export interface ActivityPlanHelper {
  set(activityPlan: ActivityPlan, data: Partial<ActivityPlan>): ActivityPlan
}
/** Object with helper methods for ActivityPlan */
export const activityPlanHelper: ActivityPlanHelper = {
  /** Creates an updated ActivityPlan object by merging an existing ActivityPlan object with new values */
  set(activityPlan: ActivityPlan, data: Partial<ActivityPlan>): ActivityPlan {
    return {
      ...activityPlan,
      ...data,
    };
  },
};

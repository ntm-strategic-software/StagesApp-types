import { ActivityKey } from './constants';
import { Task } from './task';

/**
 * A plan for doing an activity to do something specific:  an "instance" of an activity.
 */
export interface ActivityPlan {
  _id: string // Unique identifier for the ActivityPlan
  /**
   *  Number of this ActivityPlan.  This number is unique for all users on a desktop installation.
   */
  activityPlanNumber: number
  // Title of the ActivityPlan
  activityPlanTitle: string
  notes: string
  activityKey: ActivityKey|''
  tasks: Task[]
  nextTaskIndex: number
  promptClaFileId: string,
  // syncedTaskIndex: number
  mainClaFileId: string,
  unitCreated: number|null
  unitCompleted: number|null
  createdAt: string
  updatedAt: string
}

export interface NewActivityPlan extends Omit<ActivityPlan, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

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

export interface ActivityPlanHelper {
  set(activityPlan: ActivityPlan, data: Partial<ActivityPlan>): ActivityPlan
}
// Object with helper methods for ActivityPlan
export const activityPlanHelper = {
  /**
   * Creates an updated ActivityPlan object
   */
  set(activityPlan: ActivityPlan, data: Partial<ActivityPlan>): ActivityPlan {
    return {
      ...activityPlan,
      ...data,
    };
  },
};

import { ActivityKey } from './constants';
import { Task } from './task';

export interface ActivityPlan {
  _id: string
  activityPlanNumber: number
  activityPlanTitle: string
  notes: string
  activityKey: ActivityKey|''
  tasks: Task[]
  nextTaskIndex: number
  syncedTaskIndex: number
  unitCreated: number|null
  unitCompleted: number|null
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
  syncedTaskIndex: -1,
  unitCreated: null,
  unitCompleted: null,
  createdAt: '',
  updatedAt: '',
});

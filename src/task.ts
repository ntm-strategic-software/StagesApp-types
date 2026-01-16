import { Draggable, PlayerType, RecorderButtonType, TaskBox, JumpToView } from './constants';

/**
 * Represents a Task in an Activity or ActivityPlan. We do not have a Tasks table. Instead,
 * the ActivityPlan table and the ActivityTemplates data structure in Stages Desktop
 * have an array of Tasks.
 */
export interface Task {
  /** Title of the task */
  taskTitle: string
  /** Array of strings, to be displayed on separate lines */
  taskNotes: string[]
  /**
   * taskText is empty for tasks in an Activity.
   * When an ActivityPlan is created, each task in the underlying activity is added to the ActivityPlan,
   * and for each task in the ActivityPlan, taskText is set to taskTitle followed by taskNotes,
   * joined with a newline character.
   * In a task in an ActivityPlan, taskText can be edited by the user.
   */
  taskText: string
  /** The taskBox this Task appears in */
  taskBox: TaskBox | '',
  /**
   * All tasks that must have the same taskBox will have the same taskBoxGroup > 0.
   * So, when taskBox changes for a task that has taskBoxGroup > 0, all tasks in the ActivityPlan
   * that have the same taskBoxGroup will also have their taskBoxes changed.
   */
  taskBoxGroup: number
  /** Array of TaskBox keys the user is allowed to change this task to */
  taskBoxOptions: TaskBox[]
  /** Types of items that can be dropped on this task */
  droppableTypes: Draggable[]
  /**
   * Filenames of photos associated with this task (no path, but does include extension).
   * Files in a PhotoGroup will be copied to media/photos when user adds a PhotoGroup to a task.
   */
  taskPhotos: string[]
  /** CLA File (CE/DRE) associated with this task */
  taskClaFileId: string
  /**
   * Type of record button to show on Mobile task detail screen, to launch the appropriate recorder.
   * If recorderButtonType is empty string, do not show a record button.
   */
  recorderButtonType: RecorderButtonType | ''
  /**
   * Button to show on the Mobile task detail screen, to launch the appropriate player.
   * If playerButtonType is empty string, do not show a play button.
   */
  playerButtonType: PlayerType | ''
  /** True if the Quick Capture buttons should be shown on the Mobile task detail screen */
  showQuickCaptureButtons: boolean
  /** On Desktop in the Planner..Tasks tab, clicking the lightning bolt for this task will jump the user to this view */
  jumpToView: JumpToView | ''
  /**
   * True if the next task should be done in the same session as this one.
   * I.e., if you are working with a helper, false if it's ok to stop after this task
   * and pick up with the next task the next time you get together with that helper;
   * true if you really should do the next task immediately.
   */
  nextTaskSameSession: boolean
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewTask is Task with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewTask extends Omit<Task, 'createdAt' | 'updatedAt'> {
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

/** Returns a new Task object with default values */
export const taskDefaults = (): Task => ({
  taskTitle: '',
  taskNotes: [],
  taskText: '',
  taskBox: '',
  taskBoxGroup: 0,
  taskBoxOptions: [],
  droppableTypes: [
    Draggable.PI_TEXT_ONLY_DRAGGABLE,
  ],
  taskPhotos: [],
  taskClaFileId: '',
  recorderButtonType: '',
  playerButtonType: '',
  nextTaskSameSession: false,
  showQuickCaptureButtons: false,
  jumpToView: '',
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for Task */
export interface TaskHelper {
  set(task: Task, data: Partial<Task>): Task
}
/** Object with helper methods for Task */
export const taskHelper = {
  /** Creates an updated Task object by merging an existing Task object with new values */
  set(task: Task, data: Partial<Task>): Task {
    return {
      ...task,
      ...data,
    };
  },
};

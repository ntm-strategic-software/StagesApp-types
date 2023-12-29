import { Task as TaskInterface, taskDefaults } from '../task';
import { Draggable, PlayerType, RecorderButtonType, TaskBox } from '../constants';

/**
 * This represents a Task in an Activity or ActivityPlan.  We do not have a Tasks table.  Instead, a table (or
 * other data structure) has an array of Tasks.
 */
export class Task implements Task {

  taskTitle: string;

  /**
   * Array of strings, to be displayed on separate lines
   */
  taskNotes: string[];

  /**
   * taskText is empty for tasks in an Activity.  When an ActivityPlan is created, each task in the underlying activity
   * is added to the ActivityPlan, and for each task in the ActivityPlan, taskText is set to taskTitle followed by taskNotes, joined with a newline character.
   * In a task in an ActivityPlan, taskText can be edited by the user.
   */
  taskText: string;

  /**
   * The taskBox this Task appears in
   */
  taskBox: TaskBox|'';

  /**
   * All tasks that must have the same taskBox will have the same taskBoxGroup > 0.  So, when taskBox changes for a task
   * that has taskBoxGroup > 0, all tasks in the ActivityPlan that have the same taskBoxGroup will also have their
   * taskBoxes changed.
   */
  taskBoxGroup: number;

  /**
   * array of TaskBox keys the user is allowed to change this task to
   */
  taskBoxOptions: TaskBox[];

  /**
   * types of items that can be dropped on this task
   */
  droppableTypes: Draggable[];

  /**
   * filenames of photos associated with this task (no path, but does include extension).
   * Files in a PhotoGroup will be copied to media/photos when user adds a PhotoGroup to a task.
   */
  taskPhotos: string[];

  /**
   * CLA File (CE/DRE) associated with this task.
   */
  taskClaFileId: string;

  /**
   * type of record button to show on Mobile task detail screen, to launch the appropriate recorder.
   * If recorderButtonType is empty string, do not show a record button.
   */
  recorderButtonType: RecorderButtonType|'';

  /**
   * button to show on the Mobile task detail screen, to launch the appropriate player.
   * If playerButtonType is empty string, do not show a play button.
   */
  playerButtonType: PlayerType|'';

  /**
   * true if the Quick Capture buttons should be shown on the Mobile task detail screen
   */
  showQuickCaptureButtons: boolean;

  /**
   * true if the next task should be done in the same session as this one.  I.e., if you are working with a helper,
   * false if it's ok to stop after this task and pick up with the next task the next time you get together with that helper;
   * true if you really should do the next task immediately.
   */
  nextTaskSameSession: boolean;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Creates a Task object
   * @param {Task|Object} data
   */
  constructor(data?: TaskInterface) {
    const defaults = taskDefaults();
    this.taskTitle = data?.taskTitle || defaults.taskTitle;
    this.taskNotes = data?.taskNotes || defaults.taskNotes;
    this.taskText = data?.taskText || defaults.taskText;
    this.taskBox = data?.taskBox || defaults.taskBox;
    this.taskBoxGroup = data?.taskBoxGroup || defaults.taskBoxGroup;
    this.taskBoxOptions = data?.taskBoxOptions || defaults.taskBoxOptions;
    this.droppableTypes = data?.droppableTypes || defaults.droppableTypes;
    this.taskPhotos = data?.taskPhotos || defaults.taskPhotos;
    this.taskClaFileId = data?.taskClaFileId || defaults.taskClaFileId;
    this.recorderButtonType = data?.recorderButtonType || defaults.recorderButtonType;
    this.playerButtonType = data?.playerButtonType || defaults.playerButtonType;
    this.showQuickCaptureButtons = data?.showQuickCaptureButtons || defaults.showQuickCaptureButtons;
    this.nextTaskSameSession = data?.nextTaskSameSession || defaults.nextTaskSameSession;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated Task object
   */
  set(data: Partial<TaskInterface>) {
    return new Task({
      ...this,
      ...data,
    });
  }

}

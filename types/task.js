const { Draggable } = require('./constants');

/**
 * This represents a Task in an Activity or ActivityPlan.  We do not have a Tasks table.  Instead, a table (or
 * other data structure) has an array of Tasks.
 */
class Task {

  /**
   * @type {string}
   */
  taskTitle = '';

  /**
   * Array of strings, to be displayed on separate lines
   * @type {string[]}
   */
  taskNotes = [];

  /**
   * The taskBox this Task appears in
   * @type {TaskBox|string}
   */
  taskBox = '';

  /**
   * array of TaskBox keys the user is allowed to change this task to
   * @type {TaskBox[]}
   */
  taskBoxOptions = [];

  /**
   * types of items that can be dropped on this task
   * @type {Draggable[]}
   */
  droppableTypes = [Draggable.PI_DRAGGABLE];

  /**
   * filenames (no path, but with extension) of photos associated with this task (user drags photo from pending media to the task).
   * Photo files will be copied to media/photos when user adds them to the task.
   * @type {string[]}
   */
  taskPhotos = [];

  /**
   * CLA File (CE/DRE) associated with this task (user drags CE/DRE from pending to the task).
   * @type {string}
   */
  taskClaFileId = '';

  /**
   * type of record button to show on Mobile task detail screen, to launch the appropriate recorder.
   * If recorderButtonType is empty string, do not show a record button.
   * @type {RecorderType|string}
   */
  recorderButtonType = '';

  /**
   * button to show on the Mobile task detail screen, to launch the appropriate player.
   * If playerButtonType is empty string, do not show a play button.
   * @type {PlayerType|string}
   */
  playerButtonType = '';

  /**
   * Creates a Task object
   * @param {Task|Object} data
   */
  constructor(data = {}) {
    Object.assign(this, data);
  }

  /**
   * Creates an updated Task object
   * @param {Task|Object} data
   * @returns {Task}
   */
  set(data) {
    return new Task({
      ...this,
      ...data,
    });
  }

}

module.exports = Task;

/**
 * Class representing time a user has spent in each TaskBox, for each unit.
 */
class Timesheet {

  /**
   * Unique ID for the timesheet entry
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * The overall CLA unit the user was in when he created this timesheet entry (see User.claUnit)
   * @type {number|null}
   * @default null
   */
  claUnit = null;

  /**
   * TaskBox for this timesheet entry
   * @type {TaskBox|string}
   */
  taskBox = '';

  /**
   * The datetime this timesheet entry was created, representing the start of time spent in taskBox.  In ISO format (e.g., '2022-06-20T15:50:40.055Z')
   * @type {string}
   * @default ''
   */
  startTime = '';

  /**
   * The datetime this timesheet entry was completed, representing the end of time spent in taskBox.  In ISO format (e.g., '2022-06-20T15:50:40.055Z')
   * @type {string}
   * @default ''
   */
  endTime = '';

  /**
   * localStartDate is the date this timesheet entry was created, in the user's local time zone.  It is in the format 'YYYY-MM-DD'.
   *   We use this to group timesheet entries by day.
   * @type {string}
   * @default ''
   */
  localStartDate = '';


  /**
   * Creates a timesheet entry object
   * @param {Timesheet|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated timesheet entry object
   * @param {Timesheet|Object} data
   * @returns {Timesheet}
   */
  set(data) {
    return new Timesheet({
      ...this,
      ...data,
    });
  }
}

module.exports = Timesheet;

import { Timesheet as TimesheetInterface, timesheetDefault } from '../timesheet';
import { TaskBox } from '../constants';
import isNumber from 'lodash/isNumber';

/**
 * Class representing time a user has spent in each TaskBox, for each unit.
 */
export class Timesheet implements TimesheetInterface {

  /**
   * Unique ID for the timesheet entry
   */
  _id: string;

  /**
   * The overall CLA unit the user was in when he created this timesheet entry (see User.claUnit)
   */
  claUnit: number|null;

  /**
   * TaskBox for this timesheet entry
   */
  taskBox: TaskBox|'';

  /**
   * The datetime this timesheet entry was created, representing the start of time spent in taskBox.  In ISO format (e.g., '2022-06-20T15:50:40.055Z')
   */
  startTime: string;

  /**
   * The datetime this timesheet entry was completed, representing the end of time spent in taskBox.  In ISO format (e.g., '2022-06-20T15:50:40.055Z')
   */
  endTime: string;

  /**
   * localStartDate is the date this timesheet entry was created, in the user's local time zone.  It is in the format 'YYYY-MM-DD'.
   *   We use this to group timesheet entries by day.
   */
  localStartDate: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Creates a timesheet entry object
   * @param {Timesheet|Object} data
   */
  constructor(data?: TimesheetInterface) {
    const defaults = timesheetDefault();
    this._id = data?._id || defaults._id;
    const claUnit = data?.claUnit;
    this.claUnit = isNumber(claUnit) ? claUnit : defaults.claUnit;
    this.taskBox = data?.taskBox || defaults.taskBox;
    this.startTime = data?.startTime || defaults.startTime;
    this.endTime = data?.endTime || defaults.endTime;
    this.localStartDate = data?.localStartDate || defaults.localStartDate;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated timesheet entry object
   */
  set(data: Partial<TimesheetInterface>) {
    return new Timesheet({
      ...this,
      ...data,
    });
  }
}

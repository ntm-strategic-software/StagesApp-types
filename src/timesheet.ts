import { TaskBox } from './constants';

/**
 * Represents time a user has spent in a TaskBox
 */
export interface Timesheet {
  /** Unique ID for the timesheet entry */
  _id: string
  /** The overall 1-based CLA unit the user was in when he created this timesheet entry (see User.claUnit) */
  claUnit: number | null
  /** TaskBox for this timesheet entry */
  taskBox: TaskBox | ''
  /**
   * The datetime this timesheet entry was created, representing the start of time spent in taskBox.
   * In ISO format (e.g., '2022-06-20T15:50:40.055Z')
   */
  startTime: string
  /**
   * The datetime this timesheet entry was completed, representing the end of time spent in taskBox.
   * In ISO format (e.g., '2022-06-20T15:50:40.055Z')
   */
  endTime: string
  /**
   * The date this timesheet entry was created, in the user's local time zone.
   * It is in the format 'YYYY-MM-DD'. We use this to group timesheet entries by day.
   */
  localStartDate: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewTimesheet is Timesheet with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewTimesheet extends Omit<Timesheet, 'createdAt' | 'updatedAt'> {
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

/** Returns a new Timesheet object with default values */
export const timesheetDefaults = (): Timesheet => ({
  _id: '',
  claUnit: null,
  taskBox: '',
  startTime: '',
  endTime: '',
  localStartDate: '',
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for Timesheet */
export interface TimesheetHelper {
  set(timesheet: Timesheet, data: Partial<Timesheet>): Timesheet
}
/** Object with helper methods for Timesheet */
export const timesheetHelper: TimesheetHelper = {
  /** Creates an updated Timesheet object by merging an existing Timesheet object with new values */
  set(timesheet: Timesheet, data: Partial<Timesheet>): Timesheet {
    return {
      ...timesheet,
      ...data,
    };
  },
};

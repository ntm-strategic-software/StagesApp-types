import { TaskBox } from './constants';

export interface Timesheet {
  _id: string
  claUnit: number|null
  taskBox: TaskBox|''
  startTime: string
  endTime: string
  localStartDate: string
  createdAt: string
  updatedAt: string
}

export interface NewTimesheet extends Omit<Timesheet, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

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

export interface TimesheetHelper {
  set(timesheet: Timesheet, data: Partial<Timesheet>): Timesheet
}
export const timesheetHelper = {
  /**
   * Creates an updated Timesheet object
   */
  set(timesheet: Timesheet, data: Partial<Timesheet>): Timesheet {
    return {
      ...timesheet,
      ...data,
    };
  },
};

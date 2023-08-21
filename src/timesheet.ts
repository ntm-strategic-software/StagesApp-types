import { TaskBox } from './constants';

export interface Timesheet {
  _id: string
  claUnit: number|null
  taskBox: TaskBox|''
  startTime: string
  endTime: string
  localStartDate: string
}
export const timesheetDefault = (): Timesheet => ({
  _id: '',
  claUnit: null,
  taskBox: '',
  startTime: '',
  endTime: '',
  localStartDate: '',
});

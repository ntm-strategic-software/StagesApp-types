export interface UnitWeek {
  _id: string
  claUnit: number|null
  weekStart: string
  createdAt?: string
  updatedAt?: string
}
export const unitWeekDefault = (): UnitWeek => ({
  _id: '',
  claUnit: null,
  weekStart: '',
  createdAt: '',
  updatedAt: '',
});

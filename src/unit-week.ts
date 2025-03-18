export interface UnitWeek {
  _id: string
  claUnit: number|null
  weekStart: string
  createdAt?: string
  updatedAt?: string
}
export const unitWeekDefaults = (): UnitWeek => ({
  _id: '',
  claUnit: null,
  weekStart: '',
  createdAt: '',
  updatedAt: '',
});

export interface UnitWeekHelper {
  set(item: UnitWeek, data: Partial<UnitWeek>): UnitWeek
}
export const unitWeekHelper = {
  /**
   * Creates an updated UnitWeek object
   */
  set(item: UnitWeek, data: Partial<UnitWeek>): UnitWeek {
    return {
      ...item,
      ...data,
    };
  },
};

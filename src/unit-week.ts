/**
 * Represents when a user began a week of CLA for a specific unit
 */
export interface UnitWeek {
  /** Unique ID for the unitWeek entry */
  _id: string
  /** The overall 1-based CLA unit the user was in when he began this week of CLA (see User.claUnit) */
  claUnit: number | null
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the week of CLA began */
  weekStart: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewUnitWeek is UnitWeek with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewUnitWeek extends Omit<UnitWeek, 'createdAt' | 'updatedAt'> {
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

/** Returns a new UnitWeek object with default values */
export const unitWeekDefaults = (): UnitWeek => ({
  _id: '',
  claUnit: null,
  weekStart: '',
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for UnitWeek */
export interface UnitWeekHelper {
  set(item: UnitWeek, data: Partial<UnitWeek>): UnitWeek
}
/** Object with helper methods for UnitWeek */
export const unitWeekHelper = {
  /** Creates an updated UnitWeek object by merging an existing UnitWeek object with new values */
  set(item: UnitWeek, data: Partial<UnitWeek>): UnitWeek {
    return {
      ...item,
      ...data,
    };
  },
};

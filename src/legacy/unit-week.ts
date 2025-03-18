import { UnitWeek as UnitWeekInterface, unitWeekDefaults } from '../unit-week';
import isNumber from 'lodash/isNumber';

/**
 * Class representing when a user began a week of CLA for a specific unit
 */
export class UnitWeek implements UnitWeekInterface {

  /**
   * Unique ID for the unitWeek entry
   */
  _id: string;

  /**
   * The overall CLA unit the user was in when he began this week of CLA (see User.claUnit)
   */
  claUnit: number|null;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the week of CLA began
   */
  weekStart: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Creates a unitWeek entry object
   * @param {UnitWeek|Object} data
   */
  constructor(data?: UnitWeekInterface) {
    const defaults = unitWeekDefaults();
    this._id = data?._id || defaults._id;
    const claUnit = data?.claUnit;
    this.claUnit = isNumber(claUnit) ? claUnit : defaults.claUnit;
    this.weekStart = data?.weekStart || defaults.weekStart;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated unitWeek entry object
   */
  set(data: Partial<UnitWeekInterface>) {
    return new UnitWeek({
      ...this,
      ...data,
    });
  }
}

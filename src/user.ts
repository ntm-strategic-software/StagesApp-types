import { CLAStage } from './constants';

/**
 * Represents a user. This is unrelated to the People table.
 */
export interface User {
  /** Unique ID for the user */
  _id: string
  /** User's common name */
  name: string
  /** User's full name */
  fullName: string
  /** Filename of a picture of the user (no path, but does include extension) */
  photoFilename: string
  /** User's current overall unit in CLA (1-based). There are 26 total units, including Unit 1 (Warmup) and Unit 26 (Wrapup). */
  claUnit: number
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewUser is User with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewUser extends Omit<User, 'createdAt' | 'updatedAt'> {
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

/** Returns a User object with default values */
export const userDefaults = (): User => ({
  _id: '',
  name: '',
  fullName: '',
  photoFilename: '',
  claUnit: 1,
  createdAt: '',
  updatedAt: '',
});

/** interface defining helper methods for User */
export interface UserHelper {
  lastUnits: number[];
  unitsForStage(claStage: CLAStage): number[];
  getClaStageEnum(stageNum: number): CLAStage;
  getClaStageNumber(userClaStage: CLAStage): number;
  getOverallClaUnit(stageEnum: CLAStage, stageUnit: number): number;
  getClaStage(claUnit: number): {stageEnum: CLAStage, stageNumber: number, stageUnit: number};
  getMaxStageUnit(stageEnum: CLAStage): number;
  set(user: User, data: Partial<User>): User;
}
/** Object with helper methods for User */
export const userHelper = {
  /**
   * Array of the last overall 1-based claUnit for each stage, from warmup (index 0), stage 1 (index 1), ..., to wrapup (index 5)
   */
  lastUnits: [1, 5, 11, 17, 25, 26],

  /**
   * for a given stage enum value, returns an array of all unit numbers in that stage
   */
  unitsForStage(claStage: CLAStage): number[] {
    const stageNum = this.getClaStageNumber(claStage);
    if(stageNum === 0) {
      return [1]; // warm-up has only unit #1
    }

    const stageLastUnit = this.lastUnits[stageNum];
    const prevStageLastUnit = this.lastUnits[stageNum - 1];
    return Array.from(Array(stageLastUnit - prevStageLastUnit).keys(), u => u + prevStageLastUnit + 1);
  },

  /**
   * converts a 0-based CLA stage number, which is its index into this.lastUnits, to its CLAStage enum value
   */
  getClaStageEnum(stageNum: number): CLAStage {
    switch (stageNum) {
      case 0:
        return CLAStage.WARMUP;
      case 1:
        return CLAStage.STAGE_1;
      case 2:
        return CLAStage.STAGE_2;
      case 3:
        return CLAStage.STAGE_3;
      case 4:
        return CLAStage.STAGE_4;
      case 5:
        return CLAStage.WRAPUP;
      default:
        return CLAStage.WARMUP;
    }
  },

  /**
   * convert the CLAStage enum value to its 0-based stage number, which is its index into this.lastUnits
   */
  getClaStageNumber(userClaStage: CLAStage): number {
    if(userClaStage === CLAStage.WARMUP) {
      return 0;
    } else if(userClaStage === CLAStage.STAGE_1) {
      return 1;
    } else if(userClaStage === CLAStage.STAGE_2) {
      return 2;
    } else if(userClaStage === CLAStage.STAGE_3) {
      return 3;
    } else if(userClaStage === CLAStage.STAGE_4) {
      return 4;
    } else if(userClaStage === CLAStage.WRAPUP) {
      return 5;
    } else {
      return 0;
    }
  },

  /**
   * convert a stage enum and 1-based unit within that stage to the overall 1-based claUnit
   */
  getOverallClaUnit(stageEnum: CLAStage, stageUnit: number): number {
    const stageNumber = this.getClaStageNumber(stageEnum);
    return stageNumber === 0 ? stageUnit : this.lastUnits[stageNumber - 1] + stageUnit;
  },

  /**
   * Given a claUnit (overall 1-based unit number), computes:
   * - the 1-based unit within the stage.  This number resets to 1 when a user moves to a new stage.
   * - the 0-based stage number
   * - the CLAStage enum string that corresponds to the stage number
   */
  getClaStage(claUnit: number): {stageEnum: CLAStage, stageNumber: number, stageUnit: number} {
    const stageNumber = this.lastUnits.findIndex(u => u >= claUnit);
    const stageEnum = this.getClaStageEnum(stageNumber);
    const prevStageLastUnit = stageNumber === 0 ? 0 : this.lastUnits[stageNumber - 1];
    const stageUnit = claUnit - prevStageLastUnit;

    return { stageEnum, stageNumber, stageUnit };
  },

  /** Gets the maximum 1-based stage unit (not the overall 1-based cla unit) for the stage specified by the enum. The minimum is always 1 for every stage. */
  getMaxStageUnit(stageEnum: CLAStage): number {
    const stageNumber = this.getClaStageNumber(stageEnum);
    const prevStageMaxClaUnit = stageEnum === CLAStage.WARMUP ? 0 : this.lastUnits[stageNumber - 1];
    const maxClaUnit = this.lastUnits[stageNumber];
    return maxClaUnit - prevStageMaxClaUnit;
  },

  /** Creates an updated User object by merging an existing User object with new values */
  set(user: User, data: Partial<User>): User {
    return {
      ...user,
      ...data,
    };
  },
};

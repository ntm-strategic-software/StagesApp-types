import { CLAStage } from './constants';

export interface User {
  _id: string
  name: string
  fullName: string
  photoFilename: string
  claUnit: number
  createdAt?: string
  updatedAt?: string
}
export const userDefaults = (): User => ({
  _id: '',
  name: '',
  fullName: '',
  photoFilename: '',
  claUnit: 1,
  createdAt: '',
  updatedAt: '',
});

// define the UserHelper interface so when we use userHelper, we get a clean list of options
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
export const userHelper = {
  /**
   * Array of the last overall claUnit for each stage, from warmup (index 0) through the end of CLA
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
   * converts a CLA stage number, which is its index into this.lastUnits, to its CLAStage enum value
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
   * convert the CLAStage enum value to its stage number, which is its index into this.lastUnits
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
   * convert a stage enum and unit within that stage to the overall claUnit
   */
  getOverallClaUnit(stageEnum: CLAStage, stageUnit: number): number {
    const stageNumber = this.getClaStageNumber(stageEnum);
    return stageNumber === 0 ? stageUnit : this.lastUnits[stageNumber - 1] + stageUnit;
  },

  /**
   * Given a claUnit (overall unit number), computes:
   * - the unit within the stage.  This number resets to 1 when a user moves to a new stage.
   * - the stage number
   * - the CLAStage enum string that corresponds to the stage number
   */
  getClaStage(claUnit: number): {stageEnum: CLAStage, stageNumber: number, stageUnit: number} {
    const stageNumber = this.lastUnits.findIndex(u => u >= claUnit);
    const stageEnum = this.getClaStageEnum(stageNumber);
    const prevStageLastUnit = stageNumber === 0 ? 0 : this.lastUnits[stageNumber - 1];
    const stageUnit = claUnit - prevStageLastUnit;

    return { stageEnum, stageNumber, stageUnit };
  },

  /**
   * Gets the maximum stage unit (not the overall cla unit) for the stage specified by the enum.  The minimum is always 1 for every stage.
   */
  getMaxStageUnit(stageEnum: CLAStage): number {
    const stageNumber = this.getClaStageNumber(stageEnum);
    const prevStageMaxClaUnit = stageEnum === CLAStage.WARMUP ? 0 : this.lastUnits[stageNumber - 1];
    const maxClaUnit = this.lastUnits[stageNumber];
    return maxClaUnit - prevStageMaxClaUnit;
  },

  /**
   * Creates an updated user object
   */
  set(user: User, data: Partial<User>): User {
    return {
      ...user,
      ...data,
    };
  },
};

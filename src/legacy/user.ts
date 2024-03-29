import { CLAStage } from '../constants';
import { User as UserInterface, userDefaults } from '../user';

/**
 * Class representing a user.  This is unrelated to the People table.
 */
export class User implements UserInterface {

  /**
   * Unique ID for the user
   */
  _id: string;

  /**
   * User's common name
   */
  name: string;

  /**
   * User's full name
   */
  fullName: string;

  /**
   * Filename of a picture of the user
   */
  photoFilename: string;

  /**
   * User's current overall unit in CLA (1-based).  There are 26 total units, including Unit 1 (Warmup) and Unit 26 (Wrapup).
   */
  claUnit: number;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Array of the last overall claUnit for each stage, from warmup (index 0) through the end of CLA
   */
  static lastUnits = [1, 5, 11, 17, 25, 26];

  /**
   * for a given stage enum value, returns an array of all unit numbers in that stage
   */
  static unitsForStage(claStage: CLAStage): number[] {
    const stageNum = this.getClaStageNumber(claStage);
    if(stageNum === 0) {
      return [1]; // warm-up has only unit #1
    }

    const stageLastUnit = this.lastUnits[stageNum];
    const prevStageLastUnit = this.lastUnits[stageNum - 1];
    return Array.from(Array(stageLastUnit - prevStageLastUnit).keys(), u => u + prevStageLastUnit + 1);
  }

  /**
   * converts a CLA stage number, which is its index into this.lastUnits, to its CLAStage enum value
   */
  static getClaStageEnum(stageNum: number): CLAStage {
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
  }

  /**
   * convert the CLAStage enum value to its stage number, which is its index into this.lastUnits
   */
  static getClaStageNumber(userClaStage: CLAStage): number {
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
  }

  /**
   * convert a stage enum and unit within that stage to the overall claUnit
   */
  static getOverallClaUnit(stageEnum: CLAStage, stageUnit: number): number {
    const stageNumber = this.getClaStageNumber(stageEnum);
    return stageNumber === 0 ? stageUnit : this.lastUnits[stageNumber - 1] + stageUnit;
  }

  /**
   * Given a claUnit (overall unit number), computes:
   * - the unit within the stage.  This number resets to 1 when a user moves to a new stage.
   * - the stage number
   * - the CLAStage enum string that corresponds to the stage number
   */
  static getClaStage(claUnit: number): {stageEnum: CLAStage, stageNumber: number, stageUnit: number} {
    const stageNumber = this.lastUnits.findIndex(u => u >= claUnit);
    const stageEnum = this.getClaStageEnum(stageNumber);
    const prevStageLastUnit = stageNumber === 0 ? 0 : this.lastUnits[stageNumber - 1];
    const stageUnit = claUnit - prevStageLastUnit;

    return { stageEnum, stageNumber, stageUnit };
  }

  /**
   * Gets the maximum stage unit (not the overall cla unit) for the stage specified by the enum.  The minimum is always 1 for every stage.
   */
  static getMaxStageUnit(stageEnum: CLAStage): number {
    const stageNumber = this.getClaStageNumber(stageEnum);
    const prevStageMaxClaUnit = stageEnum === CLAStage.WARMUP ? 0 : this.lastUnits[stageNumber - 1];
    const maxClaUnit = this.lastUnits[stageNumber];
    return maxClaUnit - prevStageMaxClaUnit;
  }

  /**
   * Creates a user object
   * @param {User|Object} data
   */
  constructor(data?: UserInterface) {
    const defaults = userDefaults();
    this._id = data?._id || defaults._id;
    this.name = data?.name || defaults.name;
    this.fullName = data?.fullName || defaults.fullName;
    this.photoFilename = data?.photoFilename || defaults.photoFilename;
    this.claUnit = data?.claUnit || defaults.claUnit;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated user object
   */
  set(data: Partial<UserInterface>) {
    return new User({
      ...this,
      ...data,
    });
  }
}

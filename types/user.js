const { CLAStage } = require('./constants');

/**
 * Class representing a user.  This is unrelated to the People table.
 */
class User {

  /**
   * Unique ID for the user
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * User's common name
   * @type {string}
   * @default ''
   */
  name = '';

  /**
   * User's full name
   * @type {string}
   * @default ''
   */
  fullName = '';

  /**
   * Filename of a picture of the user
   * @type {string}
   * @default ''
   */
  photoFilename = '';

  /**
   * User's current overall unit in CLA.  There are 26 total units, including Unit 1 (Warmup) and Unit 26 (Wrapup).
   * @type {number}
   * @default 1
   */
  claUnit = 1;

  /**
   * Array of the last overall claUnit for each stage, from warmup (index 0) through the end of CLA
   */
  static lastUnits = [1, 5, 11, 17, 25, 26];

  /**
   * for a given stage enum value, returns an array of all unit numbers in that stage
   * @param {CLAStage} claStage
   * @returns {number[]}
   */
  static unitsForStage(claStage) {
    const stageNum = this.getClaStageNumber(claStage);

    if (stageNum === 0) return [1]; // warm-up has only unit #1

    const stageLastUnit = this.lastUnits[stageNum];
    const prevStageLastUnit = this.lastUnits[stageNum - 1];
    Array.from(Array(stageLastUnit - prevStageLastUnit).keys()).map(u => u + prevStageLastUnit + 1);
  }

  /**
   * converts a CLA stage number, which is its index into this.lastUnits, to its CLAStage enum value
   * @param {number} stageNum
   * @returns {CLAStage|string}
   */
  static getClaStageEnum(stageNum) {
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
    }
  }

  /**
   * convert the CLAStage enum value to its stage number, which is its index into this.lastUnits
   * @param {CLAStage} userClaStage
   * @returns {number}
   */
  static getClaStageNumber(userClaStage) {
    switch (userClaStage) {
      case CLAStage.WARMUP:
        return 0;
      case CLAStage.STAGE_1:
        return 1;
      case CLAStage.STAGE_2:
        return 2;
      case CLAStage.STAGE_3:
        return 3;
      case CLAStage.STAGE_4:
        return 4;
      case CLAStage.WRAPUP:
        return 5;
    }
  }

  /**
   * convert a stage enum and unit within that stage to the overall claUnit
   * @param {CLAStage|string} stageEnum
   * @param {number} stageUnit
   * @returns {number}
   */
  static getOverallClaUnit(stageEnum, stageUnit) {
    const stageNumber = this.getClaStageNumber(stageEnum);
    return stageNumber === 0 ? stageUnit : this.lastUnits[stageNumber - 1] + stageUnit;
  }

  /**
   * Given a claUnit (overall unit number), computes:
   * - the unit within the stage.  This number resets to 1 when a user moves to a new stage.
   * - the stage number
   * - the CLAStage enum string that corresponds to the stage number
   * @param {number} claUnit
   * @returns {{stageEnum: (CLAStage|string), stageNumber: number, stageUnit: number}}
   */
  static getClaStage(claUnit) {
    const stageNumber = this.lastUnits.findIndex(u => u >= claUnit);
    const stageEnum = this.getClaStageEnum(stageNumber);
    const prevStageLastUnit = stageNumber === 0 ? 0 : this.lastUnits[stageNumber - 1];
    const stageUnit = claUnit - prevStageLastUnit;

    return { stageEnum, stageNumber, stageUnit };
  }

  /**
   * Gets the maximum stage unit (not the overall cla unit) for the stage specified by the enum.  The minimum is always 1 for every stage.
   * @param {CLAStage|string} stageEnum
   * @returns {number}
   */
  static getMaxStageUnit(stageEnum) {
    const stageNumber = this.getClaStageNumber(stageEnum);
    const prevStageMaxClaUnit = stageEnum === CLAStage.WARMUP ? 0 : this.lastUnits[stageNumber - 1];
    const maxClaUnit = this.lastUnits[stageNumber];
    return maxClaUnit - prevStageMaxClaUnit;
  }

  /**
   * Creates a user object
   * @param {User|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated user object
   * @param {User|Object} data
   * @returns {User}
   */
  set(data) {
    return new User({
      ...this,
      ...data,
    });
  }
}

module.exports = User;

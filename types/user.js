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
   * Given a claUnit (overall unit number), computes:
   * - the unit within the stage.  This number resets to 1 when a user moves to a new stage.
   * - the stage number
   * - the CLAStage enum string that corresponds to the stage number
   * @param {number} claUnit
   * @returns {{stageEnum: (CLAStage|string), stageNumber: number, stageUnit: number}}
   */
  static getClaStage(claUnit) {
    const lastUnits = [1, 5, 10, 17, 25, 26];  // the last claUnit for each stage from warmup through the end of cla

    const getClaStageEnum = stageNum => {
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
    };

    const stageNumber = lastUnits.findIndex(u => u >= claUnit);
    const stageEnum = getClaStageEnum(stageNumber);
    const prevStageLastUnit = stageNumber === 0 ? 0 : lastUnits[stageNumber - 1];
    const stageUnit = claUnit - prevStageLastUnit;

    return { stageEnum, stageNumber, stageUnit };
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

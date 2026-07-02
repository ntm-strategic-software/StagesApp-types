import { CLAStage } from './constants';
import { userDefaults, userHelper } from './user';

/**
 * Stage layout implied by userHelper.lastUnits = [1, 5, 11, 17, 25, 26]:
 * - WARMUP  (stage 0): unit  1        (1 unit)
 * - STAGE_1 (stage 1): units 2-5      (4 units)
 * - STAGE_2 (stage 2): units 6-11     (6 units)
 * - STAGE_3 (stage 3): units 12-17    (6 units)
 * - STAGE_4 (stage 4): units 18-25    (8 units)
 * - WRAPUP  (stage 5): unit  26       (1 unit)
 */
describe('userHelper', () => {
  describe('lastUnits', () => {
    it('encodes the last overall claUnit of each stage', () => {
      expect(userHelper.lastUnits).toEqual([1, 5, 11, 17, 25, 26]);
    });
  });

  describe('unitsForStage', () => {
    it('returns [1] for WARMUP', () => {
      expect(userHelper.unitsForStage(CLAStage.WARMUP)).toEqual([1]);
    });

    it('returns units 2-5 for STAGE_1', () => {
      expect(userHelper.unitsForStage(CLAStage.STAGE_1)).toEqual([2, 3, 4, 5]);
    });

    it('returns units 6-11 for STAGE_2', () => {
      expect(userHelper.unitsForStage(CLAStage.STAGE_2)).toEqual([6, 7, 8, 9, 10, 11]);
    });

    it('returns units 12-17 for STAGE_3', () => {
      expect(userHelper.unitsForStage(CLAStage.STAGE_3)).toEqual([12, 13, 14, 15, 16, 17]);
    });

    it('returns units 18-25 for STAGE_4', () => {
      expect(userHelper.unitsForStage(CLAStage.STAGE_4)).toEqual([18, 19, 20, 21, 22, 23, 24, 25]);
    });

    it('returns [26] for WRAPUP', () => {
      expect(userHelper.unitsForStage(CLAStage.WRAPUP)).toEqual([26]);
    });
  });

  describe('getClaStageEnum', () => {
    it('maps 0-based stage numbers to their enum values', () => {
      expect(userHelper.getClaStageEnum(0)).toBe(CLAStage.WARMUP);
      expect(userHelper.getClaStageEnum(1)).toBe(CLAStage.STAGE_1);
      expect(userHelper.getClaStageEnum(2)).toBe(CLAStage.STAGE_2);
      expect(userHelper.getClaStageEnum(3)).toBe(CLAStage.STAGE_3);
      expect(userHelper.getClaStageEnum(4)).toBe(CLAStage.STAGE_4);
      expect(userHelper.getClaStageEnum(5)).toBe(CLAStage.WRAPUP);
    });

    it('defaults to WARMUP for out-of-range stage numbers', () => {
      expect(userHelper.getClaStageEnum(-1)).toBe(CLAStage.WARMUP);
      expect(userHelper.getClaStageEnum(6)).toBe(CLAStage.WARMUP);
      expect(userHelper.getClaStageEnum(99)).toBe(CLAStage.WARMUP);
    });
  });

  describe('getClaStageNumber', () => {
    it('maps enum values to their 0-based stage numbers', () => {
      expect(userHelper.getClaStageNumber(CLAStage.WARMUP)).toBe(0);
      expect(userHelper.getClaStageNumber(CLAStage.STAGE_1)).toBe(1);
      expect(userHelper.getClaStageNumber(CLAStage.STAGE_2)).toBe(2);
      expect(userHelper.getClaStageNumber(CLAStage.STAGE_3)).toBe(3);
      expect(userHelper.getClaStageNumber(CLAStage.STAGE_4)).toBe(4);
      expect(userHelper.getClaStageNumber(CLAStage.WRAPUP)).toBe(5);
    });

    it('defaults to 0 (WARMUP) for unrecognized values', () => {
      expect(userHelper.getClaStageNumber('BOGUS' as CLAStage)).toBe(0);
      expect(userHelper.getClaStageNumber('' as CLAStage)).toBe(0);
    });
  });

  describe('getOverallClaUnit', () => {
    it('returns the stage unit unchanged for WARMUP', () => {
      expect(userHelper.getOverallClaUnit(CLAStage.WARMUP, 1)).toBe(1);
    });

    it('offsets the stage unit by the previous stage last unit', () => {
      expect(userHelper.getOverallClaUnit(CLAStage.STAGE_1, 1)).toBe(2);
      expect(userHelper.getOverallClaUnit(CLAStage.STAGE_1, 4)).toBe(5);
      expect(userHelper.getOverallClaUnit(CLAStage.STAGE_2, 1)).toBe(6);
      expect(userHelper.getOverallClaUnit(CLAStage.STAGE_2, 6)).toBe(11);
      expect(userHelper.getOverallClaUnit(CLAStage.STAGE_3, 1)).toBe(12);
      expect(userHelper.getOverallClaUnit(CLAStage.STAGE_3, 6)).toBe(17);
      expect(userHelper.getOverallClaUnit(CLAStage.STAGE_4, 1)).toBe(18);
      expect(userHelper.getOverallClaUnit(CLAStage.STAGE_4, 8)).toBe(25);
      expect(userHelper.getOverallClaUnit(CLAStage.WRAPUP, 1)).toBe(26);
    });
  });

  describe('getClaStage', () => {
    it('handles the first unit of each stage (lower boundaries)', () => {
      expect(userHelper.getClaStage(1)).toEqual({ stageEnum: CLAStage.WARMUP, stageNumber: 0, stageUnit: 1 });
      expect(userHelper.getClaStage(2)).toEqual({ stageEnum: CLAStage.STAGE_1, stageNumber: 1, stageUnit: 1 });
      expect(userHelper.getClaStage(6)).toEqual({ stageEnum: CLAStage.STAGE_2, stageNumber: 2, stageUnit: 1 });
      expect(userHelper.getClaStage(12)).toEqual({ stageEnum: CLAStage.STAGE_3, stageNumber: 3, stageUnit: 1 });
      expect(userHelper.getClaStage(18)).toEqual({ stageEnum: CLAStage.STAGE_4, stageNumber: 4, stageUnit: 1 });
      expect(userHelper.getClaStage(26)).toEqual({ stageEnum: CLAStage.WRAPUP, stageNumber: 5, stageUnit: 1 });
    });

    it('handles the last unit of each stage (upper boundaries)', () => {
      expect(userHelper.getClaStage(5)).toEqual({ stageEnum: CLAStage.STAGE_1, stageNumber: 1, stageUnit: 4 });
      expect(userHelper.getClaStage(11)).toEqual({ stageEnum: CLAStage.STAGE_2, stageNumber: 2, stageUnit: 6 });
      expect(userHelper.getClaStage(17)).toEqual({ stageEnum: CLAStage.STAGE_3, stageNumber: 3, stageUnit: 6 });
      expect(userHelper.getClaStage(25)).toEqual({ stageEnum: CLAStage.STAGE_4, stageNumber: 4, stageUnit: 8 });
    });

    it('round-trips with getOverallClaUnit for every valid unit 1-26', () => {
      for (let claUnit = 1; claUnit <= 26; claUnit++) {
        const { stageEnum, stageUnit } = userHelper.getClaStage(claUnit);
        expect(userHelper.getOverallClaUnit(stageEnum, stageUnit)).toBe(claUnit);
      }
    });

    // The following tests characterize CURRENT behavior for invalid input.
    // getClaStage does not validate its argument, so out-of-range units
    // produce out-of-range stageUnit values (0, negative, or NaN).
    it('claUnit 0 yields WARMUP with stageUnit 0 (no input validation)', () => {
      expect(userHelper.getClaStage(0)).toEqual({ stageEnum: CLAStage.WARMUP, stageNumber: 0, stageUnit: 0 });
    });

    it('negative claUnit yields WARMUP with a negative stageUnit (no input validation)', () => {
      expect(userHelper.getClaStage(-3)).toEqual({ stageEnum: CLAStage.WARMUP, stageNumber: 0, stageUnit: -3 });
    });

    it('claUnit above 26 yields stageNumber -1 and stageUnit NaN (no input validation)', () => {
      const result = userHelper.getClaStage(27);
      expect(result.stageEnum).toBe(CLAStage.WARMUP);
      expect(result.stageNumber).toBe(-1);
      expect(result.stageUnit).toBeNaN();
    });
  });

  describe('getMaxStageUnit', () => {
    it('returns the number of units in each stage', () => {
      expect(userHelper.getMaxStageUnit(CLAStage.WARMUP)).toBe(1);
      expect(userHelper.getMaxStageUnit(CLAStage.STAGE_1)).toBe(4);
      expect(userHelper.getMaxStageUnit(CLAStage.STAGE_2)).toBe(6);
      expect(userHelper.getMaxStageUnit(CLAStage.STAGE_3)).toBe(6);
      expect(userHelper.getMaxStageUnit(CLAStage.STAGE_4)).toBe(8);
      expect(userHelper.getMaxStageUnit(CLAStage.WRAPUP)).toBe(1);
    });
  });

  describe('set', () => {
    it('merges partial data over an existing User without mutating it', () => {
      const user = userDefaults();
      const updated = userHelper.set(user, { name: 'Ana', claUnit: 7 });
      expect(updated.name).toBe('Ana');
      expect(updated.claUnit).toBe(7);
      expect(user.name).toBe('');
      expect(user.claUnit).toBe(1);
    });
  });
});

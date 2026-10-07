import { ActivityKey, generatedActivityKeys, reflectOnDataKeys } from './constants';
import { activityKey2DisplayName, getActivityDisplayName, isGeneratedActivityKey } from './activity-utils';

describe('getActivityDisplayName', () => {
  it('returns the localized value from the requested locale file', () => {
    // locales/en.json maps each English name to itself under the Activity context
    expect(getActivityDisplayName(ActivityKey.GET_ACQUAINTED, 'en')).toBe('Get Acquainted');
    expect(getActivityDisplayName(ActivityKey.TELL_STORY, 'en')).toBe('Tell a Story');
  });

  it('returns a translated value for a non-English locale', () => {
    expect(getActivityDisplayName(ActivityKey.GET_ACQUAINTED, 'es')).toBe('Familiarícese');
  });

  it('falls back to the English locale file when the locale file is missing', () => {
    expect(getActivityDisplayName(ActivityKey.GET_ACQUAINTED, 'zz-nonexistent')).toBe('Get Acquainted');
  });

  it('falls back to String(activityKey) for a key with no English display name', () => {
    const bogusKey = 'NOT_A_REAL_ACTIVITY' as ActivityKey;
    expect(getActivityDisplayName(bogusKey, 'en')).toBe('NOT_A_REAL_ACTIVITY');
    // Same fallback when the locale file itself is also missing
    expect(getActivityDisplayName(bogusKey, 'zz-nonexistent')).toBe('NOT_A_REAL_ACTIVITY');
  });

  it('resolves every ActivityKey to a non-empty display name in en', () => {
    for (const key of Object.values(ActivityKey)) {
      const name = getActivityDisplayName(key, 'en');
      expect(name).toBe(activityKey2DisplayName[key]);
      expect(name.length).toBeGreaterThan(0);
    }
  });
});

describe('generatedActivityKeys', () => {
  const activityKeyValues = new Set<string>(Object.values(ActivityKey));

  it('contains only ActivityKey enum members', () => {
    for (const key of generatedActivityKeys) {
      expect(activityKeyValues.has(key)).toBe(true);
    }
    for (const key of reflectOnDataKeys) {
      expect(activityKeyValues.has(key)).toBe(true);
    }
  });

  it('includes every reflectOnDataKeys entry', () => {
    for (const key of reflectOnDataKeys) {
      expect(generatedActivityKeys).toContain(key);
    }
  });

  it('has the expected membership', () => {
    expect([...generatedActivityKeys].sort()).toEqual([
      ActivityKey.ANALYZE,
      ActivityKey.DAILY_REFLECT_ON_PROGRESS,
      ActivityKey.EVALUATE_PROGRESS,
      ActivityKey.FINALIZE_CONCLUSIONS,
      ActivityKey.PLAN_NEW_ACTIVITIES,
      ActivityKey.PLAN_NEXT_DAY,
      ActivityKey.PLAN_NEXT_UNIT,
      ActivityKey.PROCESS_PENDING_MEDIA,
      ActivityKey.PROCESS_QUICK_NOTES,
      ActivityKey.REFLECT,
      ActivityKey.REFLECT_ON_DATA_STAGES_1_2,
      ActivityKey.REFLECT_ON_DATA_STAGES_3_4,
      ActivityKey.REFLECT_ON_DATA_WARMUP,
      ActivityKey.REFLECT_ON_PROGRESS,
    ].sort());
  });
});

describe('isGeneratedActivityKey', () => {
  it('returns true for every generatedActivityKeys member, including legacy REFLECT', () => {
    expect(generatedActivityKeys).toContain(ActivityKey.REFLECT);
    for (const key of generatedActivityKeys) {
      expect(isGeneratedActivityKey(key)).toBe(true);
    }
  });

  it('returns false for a user-created activity key and for an empty string', () => {
    expect(isGeneratedActivityKey(ActivityKey.GET_ACQUAINTED)).toBe(false);
    expect(isGeneratedActivityKey('')).toBe(false);
  });
});

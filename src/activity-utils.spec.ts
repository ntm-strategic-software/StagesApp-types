import { ActivityKey } from './constants';
import { activityKey2DisplayName, getActivityDisplayName } from './activity-utils';

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

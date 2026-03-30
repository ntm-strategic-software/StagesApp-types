import { ActivityKey } from './constants';

type LocaleEntry = {
  val: string;
  note: string;
};

type LocaleData = Record<string, Record<string, LocaleEntry>>;

/**
 * Returns the localized display name for an activity.
 * @param activityKey - The ActivityKey enum value identifying the activity.
 * @param locale - The locale code, e.g. 'en'. Must correspond to a file in the locales directory.
 * @returns The localized display name, or the raw activityKey string if not found.
 */
export function getActivityDisplayName(
  activityKey: ActivityKey,
  locale: Intl.LocalesArgument & string,
): string {
  let localeData: LocaleData;
  try {
    localeData = require(`../locales/${locale}.json`);
  } catch {
    // Fallback to English if the specified locale file is not found
    localeData = require('../locales/en.json');
  }
  return localeData[activityKey]?.['Activity']?.val ?? String(activityKey);
}

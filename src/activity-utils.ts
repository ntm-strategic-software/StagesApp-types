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
 * @param context - The localization context string, e.g. 'Activity'.
 * @returns The localized display name, or the raw activityKey string if not found.
 */
export function getActivityDisplayName(
  activityKey: ActivityKey,
  locale: Intl.LocalesArgument & string,
  context: string,
): string {
  // Fallback to English if locale file not found
  const localeData: LocaleData = require(`../locales/${locale}.json`) || require('../locales/en.json');
  return localeData[activityKey]?.[context]?.val ?? String(activityKey);
}

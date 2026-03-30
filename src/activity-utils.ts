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
  locale: string,
  context: string,
): string {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const localeData: LocaleData = require(`../locales/${locale}.json`);
  return localeData[activityKey]?.[context]?.val ?? String(activityKey);
}

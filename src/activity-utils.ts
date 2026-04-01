import { ActivityKey } from './constants';

type LocaleEntry = {
  val: string;
  note: string;
};

type LocaleData = Record<string, Record<string, LocaleEntry>>;

/**
 * Maps activity keys to their English display names.
 */
export const activityKey2DisplayName: Record<ActivityKey, string> = {
  [ActivityKey.GET_ACQUAINTED]: 'Get Acquainted',
  [ActivityKey.EXPERIENCE_CULTURE_EVENT]: 'Experience a Culture Event',
  [ActivityKey.VISIT_IN_COMMUNITY]: 'Visit People',
  [ActivityKey.HOST_VISITORS]: 'Host Visitors',
  [ActivityKey.JOIN_COMMUNITY_GROUP]: 'Join a Group',
  [ActivityKey.LISTEN_AND_DO_SILENT]: 'Listen and Do (Silent)',
  [ActivityKey.LISTEN_DO_AND_SPEAK]: 'Listen and Do',
  [ActivityKey.PRACTICE_DIFFICULT_SOUNDS]: 'Learn Sounds',
  [ActivityKey.PRACTICE_DIFFICULT_GRAMMAR_FEATURES]: 'Learn Grammar',
  [ActivityKey.ELICIT_GRAMMAR_FEATURES]: 'Discover Grammar',
  [ActivityKey.COMMENT_ON_PHOTO_ANSWER_QUESTIONS]: 'Comment on a Photo',
  [ActivityKey.TALK_ABOUT_PHOTO_ASK_QUESTIONS]: 'Describe a Photo',
  [ActivityKey.ELICIT_PRACTICAL_EXPRESSIONS]: 'Learn a Useful Phrase',
  [ActivityKey.ACT_OUT_ROLE_PLAY]: 'Learn a Role Play',
  [ActivityKey.RECORD_LISTEN_PROCESS_1]: 'Record a Native Speaker (Stage 2)',
  [ActivityKey.RECORD_LISTEN_PROCESS_2]: 'Record a Native Speaker (Stages 3-4)',
  [ActivityKey.INTERVIEW_NATIVE_SPEAKER]: 'Interview a Native Speaker',
  [ActivityKey.RECORD_NATIVE_SPEAKER_INTERACTION]: 'Record Native Conversation',
  [ActivityKey.RECORD_LISTEN_RETELL]: 'Listen and Retell',
  [ActivityKey.RECORD_SELF_FOR_FEEDBACK]: 'Record for Feedback',
  [ActivityKey.LISTEN_MODEL_COMPARE]: 'Model and Compare',
  [ActivityKey.REVIEW_VOCABULARY]: 'Practice Vocabulary',
  [ActivityKey.HAVE_PREPLANNED_CONVERSATION]: 'Have a Conversation',
  [ActivityKey.DESCRIBE_OBJECT_EVENT_ROUTINE]: 'Describe Something',
  [ActivityKey.TELL_STORY]: 'Tell a Story',
  [ActivityKey.CONTRAST_COMPARE]: 'Contrast and Compare',
  [ActivityKey.DISCUSS_UNKNOWN_TOPICS]: 'Discuss an Unknown Topic',
  [ActivityKey.PRODUCE_HIGH_LEVEL_GENRES]: 'Practice Extended Discourse',
  [ActivityKey.PLAN_NEXT_DAY]: "Plan Next Day's Tasks",
  [ActivityKey.PLAN_NEW_ACTIVITIES]: 'Plan New Activities',
  [ActivityKey.PLAN_NEXT_UNIT]: 'Plan Next Unit',
  [ActivityKey.PROCESS_PENDING_MEDIA]: 'Process Media',
  [ActivityKey.PROCESS_QUICK_NOTES]: 'Process New Notes',
  [ActivityKey.REFLECT_ON_PROGRESS]: 'Reflect on Progress',
  [ActivityKey.EVALUATE_PROGRESS]: 'Evaluate Progress',
  [ActivityKey.REFLECT]: 'Reflect on Data',
  [ActivityKey.ANALYZE]: 'Analyze Data',
  [ActivityKey.FINALIZE_CONCLUSIONS]: 'Finalize Conclusions',
  [ActivityKey.RECORD_NATIVE_SPEAKER_DISCUSSION]: 'Record native speaker discussion',
  [ActivityKey.RECORD_CLARIFY_EXPAND]: 'Record-Clarify-Expand',
  [ActivityKey.INTERACT_ABOUT_SCENE]: 'Interact about a scene',
};

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

  // locale/en.json is the base data for Stages Types in Translator Helper.
  const englishName = activityKey2DisplayName[activityKey];
  const fallback = englishName ?? String(activityKey);
  return localeData[englishName]?.['Activity']?.val ?? fallback;
}

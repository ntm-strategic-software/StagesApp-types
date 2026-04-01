import { ActivityKey } from './constants';

type LocaleEntry = {
  val: string;
  note: string;
};

type LocaleData = Record<string, Record<string, LocaleEntry>>;

/**
 * Maps activity keys to their English display names.
 */
export const activityKey2DisplayName: Record<string, string> = {
  GET_ACQUAINTED: 'Get Acquainted',
  EXPERIENCE_CULTURE_EVENT: 'Experience a Culture Event',
  VISIT_IN_COMMUNITY: 'Visit People',
  HOST_VISITORS: 'Host Visitors',
  JOIN_COMMUNITY_GROUP: 'Join a Group',
  LISTEN_AND_DO_SILENT: 'Listen and Do (Silent)',
  LISTEN_DO_AND_SPEAK: 'Listen and Do',
  PRACTICE_DIFFICULT_SOUNDS: 'Learn Sounds',
  PRACTICE_DIFFICULT_GRAMMAR_FEATURES: 'Learn Grammar',
  ELICIT_GRAMMAR_FEATURES: 'Discover Grammar',
  COMMENT_ON_PHOTO_ANSWER_QUESTIONS: 'Comment on a Photo',
  TALK_ABOUT_PHOTO_ASK_QUESTIONS: 'Describe a Photo',
  ELICIT_PRACTICAL_EXPRESSIONS: 'Learn a Useful Phrase',
  ACT_OUT_ROLE_PLAY: 'Learn a Role Play',
  RECORD_LISTEN_PROCESS_1: 'Record a Native Speaker (Stage 2)',
  RECORD_LISTEN_PROCESS_2: 'Record a Native Speaker (Stages 3-4)',
  INTERVIEW_NATIVE_SPEAKER: 'Interview a Native Speaker',
  RECORD_NATIVE_SPEAKER_INTERACTION: 'Record Native Conversation',
  RECORD_LISTEN_RETELL: 'Listen and Retell',
  RECORD_SELF_FOR_FEEDBACK: 'Record for Feedback',
  LISTEN_MODEL_COMPARE: 'Model and Compare',
  REVIEW_VOCABULARY: 'Practice Vocabulary',
  HAVE_PREPLANNED_CONVERSATION: 'Have a Conversation',
  DESCRIBE_OBJECT_EVENT_ROUTINE: 'Describe Something',
  TELL_STORY: 'Tell a Story',
  CONTRAST_COMPARE: 'Contrast and Compare',
  DISCUSS_UNKNOWN_TOPICS: 'Discuss an Unknown Topic',
  PRODUCE_HIGH_LEVEL_GENRES: 'Practice Extended Discourse',
  PLAN_NEXT_DAY: "Plan Next Day's Tasks",
  PLAN_NEW_ACTIVITIES: 'Plan New Activities',
  PLAN_NEXT_UNIT: 'Plan Next Unit',
  PROCESS_PENDING_MEDIA: 'Process Media',
  PROCESS_QUICK_NOTES: 'Process New Notes',
  REFLECT_ON_PROGRESS: 'Reflect on Progress',
  EVALUATE_PROGRESS: 'Evaluate Progress',
  REFLECT: 'Reflect on Data',
  ANALYZE: 'Analyze Data',
  FINALIZE_CONCLUSIONS: 'Finalize Conclusions',
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
  return localeData[englishName]?.['Activity']?.val ?? String(activityKey);
}

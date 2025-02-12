/**
 * Enum of TaskBoxes
 */
export enum TaskBox {
  PLAN = 'PLAN',
  PROCESS = 'PROCESS',
  COMMUNITY = 'COMMUNITY',
  HELPER = 'HELPER',
  PLAYLIST = 'PLAYLIST',
}

/**
 * Enum of Draggable type
 * This enum is in StagesApp-Types because it is used in Task.droppableTypes.
 */
export enum Draggable {
  PI_TEXT_ONLY_DRAGGABLE = 'PI_TEXT_ONLY_DRAGGABLE', // Pending Idea
  PI_CE_DRAGGABLE = 'PI_CE_DRAGGABLE', // Pending Idea with a CE
  PI_PE_DRAGGABLE = 'PI_PE_DRAGGABLE', // Pending Idea with a PE
  PI_DRE_DRAGGABLE = 'PI_DRE_DRAGGABLE', // Pending Idea with a DRE
  PI_DRE_SIMPLE_DRAGGABLE = 'PI_DRE_SIMPLE_DRAGGABLE', // Pending Idea with a Simple DRE
  PHOTO_DRAGGABLE = 'PHOTO_DRAGGABLE',
  NEW_PHOTO_DRAGGABLE = 'NEW_PHOTO_DRAGGABLE',
  PHOTO_GROUP_DRAGGABLE = 'PHOTO_GROUP_DRAGGABLE',
  CE_DRAGGABLE = 'CE_DRAGGABLE',
  PE_DRAGGABLE = 'PE_DRAGGABLE',
  DRE_DRAGGABLE = 'DRE_DRAGGABLE',
  DRE_SIMPLE_DRAGGABLE = 'DRE_SIMPLE_DRAGGABLE',
  NOT_DRAGGABLE = 'NOT_DRAGGABLE', // Dragging not allowed
}

/**
 * Enum of recorder types
 */
export enum RecorderButtonType {
  GENERAL_RECORDER_PROMPT = 'GENERAL_RECORDER_PROMPT',
  GENERAL_RECORDER_PROMPT_OPTIONAL = 'GENERAL_RECORDER_PROMPT_OPTIONAL',
  GENERAL_RECORDER_MAIN = 'GENERAL_RECORDER_MAIN',
  GENERAL_RECORDER_MAIN_OPTIONAL = 'GENERAL_RECORDER_MAIN_OPTIONAL',
  DUAL_RECORDER1 = 'DUAL_RECORDER1',
  DUAL_RECORDER2 = 'DUAL_RECORDER2',
  DUAL_RECORDER1_SIMPLE = 'DUAL_RECORDER1_SIMPLE',
  DUAL_RECORDER2_SIMPLE_OPTIONAL = 'DUAL_RECORDER2_SIMPLE_OPTIONAL',
  PE_RECORDER = 'PE_RECORDER',  // this will result in a main (not prompt) CLA File
}

/**
 * Enum of player types
 */
export enum PlayerType {
  GENERAL_RECORDING_PROMPT_PLAYER = 'GENERAL_RECORDING_PROMPT_PLAYER',
  GENERAL_RECORDING_MAIN_PLAYER = 'GENERAL_RECORDING_MAIN_PLAYER',
}

/**
 * On Desktop in the Planner..Tasks tab, where clicking the lightning bolt for a task will jump the user to.
 */
export enum JumpToView {
  HOME_REVIEW = 'HOME_REVIEW',
  HOME_PROCESS = 'HOME_PROCESS',
  HOME_OBSERVATIONS = 'HOME_OBSERVATIONS',
  PLANNER_ACTIVITIES_TASK = 'PLANNER_ACTIVITIES_TASK',
  PLANNER_UNIT = 'PLANNER_UNIT',
  PLANNER_MEDIA = 'PLANNER_MEDIA',
  PLANNER_REFLECTION = 'PLANNER_REFLECTION',
  PLANNER_SELF_EVALUATION = 'PLANNER_SELF_EVALUATION',
  PHOTO_VIEWER = 'PHOTO_VIEWER',
}

/**
 * Enum for the CLA Stage that the user is in
 */
export enum CLAStage {
  WARMUP = 'WARMUP',
  STAGE_1 = 'STAGE_1',
  STAGE_2 = 'STAGE_2',
  STAGE_3 = 'STAGE_3',
  STAGE_4 = 'STAGE_4',
  WRAPUP = 'WRAPUP',
}

/**
 * Enum of the possible types of a CLA File
 */
export enum ClaFileType {
  CULTURE_EVENT = 'CULTURE_EVENT',
  DRE = 'DRE',
  PE = 'PE',
  SIMPLE_DRE = 'SIMPLE_DRE',
}

/**
 * Enum of the possible types of an advanced filter
 */
export enum AdvancedFilterType {
  NORMAL_FILTER = 'NORMAL_FILTER',
  TRANSCRIPTION_FILTER = 'TRANSCRIPTION_FILTER',
}

/**
 * Enum for Activities
 */
export enum ActivityKey {
  // COMMUNITY EXPERIENCE ACTIVITIES
  GET_ACQUAINTED = 'GET_ACQUAINTED',
  EXPERIENCE_CULTURE_EVENT = 'EXPERIENCE_CULTURE_EVENT',
  VISIT_IN_COMMUNITY = 'VISIT_IN_COMMUNITY',
  HOST_VISITORS = 'HOST_VISITORS',
  JOIN_COMMUNITY_GROUP = 'JOIN_COMMUNITY_GROUP',

  // BASIC LEARNING ACTIVITIES - not sure this is still a category
  // Listen and Do Activities
  LISTEN_AND_DO_SILENT = 'LISTEN_AND_DO_SILENT',
  LISTEN_DO_AND_SPEAK = 'LISTEN_DO_AND_SPEAK',

  // INTERACTIVE ACTIVITIES
  COMMENT_ON_PHOTO_ANSWER_QUESTIONS = 'COMMENT_ON_PHOTO_ANSWER_QUESTIONS',
  TALK_ABOUT_PHOTO_ASK_QUESTIONS = 'TALK_ABOUT_PHOTO_ASK_QUESTIONS',

  // ROLE PLAY ACTIVITIES
  ELICIT_PRACTICAL_EXPRESSIONS = 'ELICIT_PRACTICAL_EXPRESSIONS',
  ACT_OUT_ROLE_PLAY = 'ACT_OUT_ROLE_PLAY',

  // RECORD AND PROCESS ACTIVITIES
  RECORD_LISTEN_PROCESS_1 = 'RECORD_LISTEN_PROCESS_1',
  RECORD_LISTEN_PROCESS_2 = 'RECORD_LISTEN_PROCESS_2',
  INTERVIEW_NATIVE_SPEAKER = 'INTERVIEW_NATIVE_SPEAKER',
  RECORD_NATIVE_SPEAKER_INTERACTION = 'RECORD_NATIVE_SPEAKER_INTERACTION',
  RECORD_NATIVE_SPEAKER_DISCUSSION = 'RECORD_NATIVE_SPEAKER_DISCUSSION',

  // MODELING ACTIVITIES
  RECORD_LISTEN_RETELL = 'RECORD_LISTEN_RETELL',
  RECORD_SELF_FOR_FEEDBACK = 'RECORD_SELF_FOR_FEEDBACK',
  LISTEN_MODEL_COMPARE = 'LISTEN_MODEL_COMPARE',

  // COMMUNITY PRACTICE ACTIVITIES
  REVIEW_VOCABULARY = 'REVIEW_VOCABULARY',
  HAVE_PREPLANNED_CONVERSATION = 'HAVE_PREPLANNED_CONVERSATION',
  DESCRIBE_OBJECT_EVENT_ROUTINE = 'DESCRIBE_OBJECT_EVENT_ROUTINE',
  TELL_STORY = 'TELL_STORY',
  CONTRAST_COMPARE = 'CONTRAST_COMPARE',
  DISCUSS_UNKNOWN_TOPICS = 'DISCUSS_UNKNOWN_TOPICS',
  PRODUCE_HIGH_LEVEL_GENRES = 'PRODUCE_HIGH_LEVEL_GENRES',

  // SOUND AND GRAMMAR ACTIVITIES
  // Focused Content Activities - not sure this is still a category
  PRACTICE_DIFFICULT_SOUNDS = 'PRACTICE_DIFFICULT_SOUNDS',
  PRACTICE_DIFFICULT_GRAMMAR_FEATURES = 'PRACTICE_DIFFICULT_GRAMMAR_FEATURES',
  ELICIT_GRAMMAR_FEATURES = 'ELICIT_GRAMMAR_FEATURES',

  // PLANNING AND PROCESSING ACTIVITIES
  PLAN_NEXT_DAY = 'PLAN_NEXT_DAY',
  PLAN_NEW_ACTIVITIES = 'PLAN_NEW_ACTIVITIES',
  PLAN_NEXT_UNIT = 'PLAN_NEXT_UNIT',
  PROCESS_PENDING_MEDIA = 'PROCESS_PENDING_MEDIA',
  PROCESS_QUICK_NOTES = 'PROCESS_QUICK_NOTES',

  // ASSESSMENT ACTIVITIES
  REFLECT_ON_PROGRESS = 'REFLECT_ON_PROGRESS',
  EVALUATE_PROGRESS = 'EVALUATE_PROGRESS',

  // ANALYSIS AND CONCLUSION ACTIVITIES
  REFLECT = 'REFLECT',
  ANALYZE = 'ANALYZE',
  FINALIZE_CONCLUSIONS = 'FINALIZE_CONCLUSIONS',

  // OBSOLETE
  RECORD_CLARIFY_EXPAND = 'RECORD_CLARIFY_EXPAND',
  INTERACT_ABOUT_SCENE = 'INTERACT_ABOUT_SCENE',
}

export enum PendingFileType {
  GENERAL_RECORDER = 'GENERAL_RECORDER',
  PE_RECORDER = 'PE_RECORDER',
  DUAL_RECORDER = 'DUAL_RECORDER',
  DUAL_RECORDER_SIMPLE = 'DUAL_RECORDER_SIMPLE',
  QUICK_PHOTO = 'QUICK_PHOTO',
  QUICK_NOTE = 'QUICK_NOTE',
}

/**
 * Enum for the different groups of reflection questions
 */
export enum ReflectionQuestionSets {
  HOW_CLA_WENT = 'HOW_CLA_WENT',
  OBSERVED = 'OBSERVED',
  SCHEDULE = 'SCHEDULE',
  HELP = 'HELP',
  READY_FOR_NEXT_UNIT = 'READY_FOR_NEXT_UNIT',
}

/**
 * Enum for the different types of answers
 */
export enum AnswerTypes {
  TEXT = 'TEXT',
  MULTIPLE_CHOICE_ONE = 'MULTIPLE_CHOICE_ONE',  // allow user to select only one option
  CHECKBOX = 'CHECKBOX',
  NONE = 'NONE',  // no answer allowed.  This is for showing text only.
  STATS = 'STATS',  // no answer allowed.  This is for showing the question text and statistics only.
  PENDING_IDEAS = 'PENDING_IDEAS',  // answer is a list of texts of Pending Ideas
  EXTRA_ACTIVITIES = 'EXTRA_ACTIVITIES',  // answer is a list of ActivityKeys with current created, completed, recommended, and extra user wants to do
  NEW_ACTIVITIES = 'NEW_ACTIVITIES',  // answer is a list of ActivityKeys with true/false for each, plus a NONE option
}

/**
 * Error types that we want to handle specially
 */
export enum ErrorType {
  OLD_MOBILE_VERSION = 'OLD_MOBILE_VERSION',
  OLD_DESKTOP_VERSION = 'OLD_DESKTOP_VERSION',
  NO_DESKTOP_USER = 'NO_DESKTOP_USER',
}

/**
 * Enum for table names
 *
 * NOTE:  all tables include properties createdAt and updatedAt, which are ISO date strings (e.g., '2022-06-20T15:50:40.055Z')
 */
export enum TableNames {
  USERS = 'Users',
  DESKTOP_SETTINGS = 'DesktopSettings',
  CULTURE_EVENTS = 'CultureEvents',
  GENERAL_RECORDINGS = 'GeneralRecordings',
  GENERAL_PHOTOS = 'GeneralPhotos',
  GENERAL_QUESTIONS = 'GeneralQuestions',
  MARKERS = 'Markers',
  PEOPLE = 'People',
  LOCATIONS = 'Locations',
  SEARCH_WORDS = 'SearchWords',
  TRUSTED_MACHINES = 'TrustedMachines',
  MOBILE_DEVICES = 'MobileDevices',
  DELETED_ITEMS = 'DeletedItems',
  TRANSCRIPTIONS = 'Transcriptions',
  DRE = 'DRE',
  ADVANCED_FILTERS = 'AdvancedFilters',
  PLAYLIST_ITEMS = 'PlaylistItems',
  PENDING_IDEAS = 'PendingIdeas',
  OBSERVATIONS = 'Observations',
  TAGS = 'Tags',
  ACTIVITY_PLANS = 'ActivityPlans',
  // PENDING_MEDIA = 'PendingMedia',
  TASK_BOX_SORT_ORDER = 'TaskBoxSortOrder',
  PHOTO_GROUPS = 'PhotoGroups',
  QUICK_NOTES = 'QuickNotes',
  REFLECTION_QUESTIONS = 'ReflectionQuestions',
  SELF_EVALUATION_QUESTIONS = 'SelfEvaluationQuestions',
  CONSULTANT_RECOMMENDATIONS = 'ConsultantRecommendations',
  TIMESHEET = 'Timesheet',
  UNIT_WEEKS = 'UnitWeeks',
}

/**
 * Enum for table names to sync from mobile to desktop.
 * Tables that are synced from desktop to mobile are listed in StagesApp-desktop db-schema.js desktopTablesToSendToMobile
 */
export const mobileTablesToSendToDesktop = [
  TableNames.USERS,
  TableNames.CULTURE_EVENTS,
  TableNames.GENERAL_RECORDINGS,
  TableNames.MARKERS,
  TableNames.PEOPLE,
  TableNames.LOCATIONS,
  TableNames.GENERAL_PHOTOS,
  TableNames.GENERAL_QUESTIONS,
  TableNames.SEARCH_WORDS,
  TableNames.DRE,
  TableNames.PLAYLIST_ITEMS,
  TableNames.QUICK_NOTES,
  TableNames.ACTIVITY_PLANS,
  TableNames.TASK_BOX_SORT_ORDER,
  TableNames.TIMESHEET,
];

export const MOBILE_ALL_CLA_FILE_IDS = 'MOBILE_ALL_CLA_FILE_IDS';
export const MOBILE_ALL_ACTIVITY_PLAN_IDS = 'MOBILE_ALL_ACTIVITY_PLAN_IDS';
export const REQUESTED_CLA_FILE_IDS = 'REQUESTED_CLA_FILE_IDS';
export const REQUESTED_ACTIVITY_PLAN_IDS = 'REQUESTED_ACTIVITY_PLAN_IDS';

export const TASK_BOX_SORT_ORDER_ID = '8cf436a9-c7a2-4222-bf4f-3b047b93116a';

export const backupHostSuffix = '/backup';  // for restoring files to Mobile from a mobile backup (which is on Desktop)

/**
 * Enum of the possible types of data transfers between mobile and desktop
 */
export enum DataTransferType {
  SYNC = 'SYNC',
  IMPORT_USER = 'IMPORT_USER',
  BACKUP_ALL_DATA = 'BACKUP_ALL_DATA',
  RESTORE_ALL_DATA = 'RESTORE_ALL_DATA',
}

export enum socketEndpoints {
  // used for sync
  GET_PUBLIC_KEY = 'GET_PUBLIC_KEY',
  KEY_CHALLENGE = 'KEY_CHALLENGE',
  TRANSFER_TYPE = 'TRANSFER_TYPE',
  GET_LAST_SYNC_TIME = 'GET_LAST_SYNC_TIME',
  SEND_MOBILE_DATA = 'SEND_MOBILE_DATA',
  GET_DESKTOP_PHOTO = 'GET_DESKTOP_PHOTO',
  // GET_TABLE_ITEMS = 'GET_TABLE_ITEMS',  // Not currently used, but I'm leaving it here in case we ever want it.
  SEND_EXTRA_MOBILE_DATA = 'SEND_EXTRA_MOBILE_DATA',
  FINALIZE_DESKTOP = 'FINALIZE_DESKTOP',
  MOBILE_ERROR = 'MOBILE_ERROR',
  DESKTOP_ERROR = 'DESKTOP_ERROR',
}

export enum PostPaths {
  UPLOAD_FILE = '/uploadfile',
  UPLOAD_FILE_BACKUP = '/uploadfilebackup',
}

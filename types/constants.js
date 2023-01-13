/**
 * Enum of TaskBoxes
 * @readonly
 * @enum {string}
 */
const TaskBox = {
  PLAN: 'PLAN',
  PROCESS: 'PROCESS',
  COMMUNITY: 'COMMUNITY',
  HELPER: 'HELPER',
  PLAYlIST: 'PLAYLIST',
};

/**
 * Enum of Draggable type
 * This enum is in StagesApp-Types because it is used in Task.droppableTypes.
 * @readonly
 * @enum {string}
 */
const Draggable = {
  PI_TEXT_ONLY_DRAGGABLE: 'PI_TEXT_ONLY_DRAGGABLE', // Pending Investigation
  PI_CE_DRAGGABLE: 'PI_CE_DRAGGABLE', // Pending Investigation with a CE
  PI_PE_DRAGGABLE: 'PI_PE_DRAGGABLE', // Pending Investigation with a PE
  PI_DRE_DRAGGABLE: 'PI_DRE_DRAGGABLE', // Pending Investigation with a DRE
  PHOTO_DRAGGABLE: 'PHOTO_DRAGGABLE',
  NEW_PHOTO_DRAGGABLE: 'NEW_PHOTO_DRAGGABLE',
  PHOTO_GROUP_DRAGGABLE: 'PHOTO_GROUP_DRAGGABLE',
  CE_DRAGGABLE: 'CE_DRAGGABLE',
  PE_DRAGGABLE: 'PE_DRAGGABLE',
  DRE_DRAGGABLE: 'DRE_DRAGGABLE',
  NOT_DRAGGABLE: 'NOT_DRAGGABLE', // Dragging not allowed
};

/**
 * Enum of recorder types
 * @readonly
 * @enum {string}
 */
const RecorderButtonType = {
  GENERAL_RECORDER: 'GENERAL_RECORDER',
  DUAL_RECORDER1: 'DUAL_RECORDER1',
  DUAL_RECORDER2: 'DUAL_RECORDER2',
  PE_RECORDER: 'PE_RECORDER',
};

/**
 * Enum of player types
 * @readonly
 * @enum {string}
 */
const PlayerType = {
  GENERAL_RECORDING_PLAYER: 'GENERAL_RECORDING_PLAYER',
};

/**
 * Enum for the CLA Stage that the user is in
 * @readonly
 * @enum {string}
 */
const CLAStage = {
  WARMUP: 'WARMUP',
  STAGE_1: 'STAGE_1',
  STAGE_2: 'STAGE_2',
  STAGE_3: 'STAGE_3',
  STAGE_4: 'STAGE_4',
  WRAPUP: 'WRAPUP',
};

/**
 * Enum of the possible types of a CLA File
 * @enum {string}
 */
const ClaFileType = {
  CULTURE_EVENT: 'CULTURE_EVENT',
  DRE: 'DRE',
  PE: 'PE',
};

/**
 * Enum of the possible types of an advanced filter
 * @readonly
 * @enum {string}
 */
const AdvancedFilterType = {
  NORMAL_FILTER: 'NORMAL_FILTER',
  TRANSCRIPTION_FILTER: 'TRANSCRIPTION_FILTER',
};

/**
 * Enum for Activities
 * @readonly
 * @enum {string}
 */
const ActivityKey = {
  // COMMUNITY EXPERIENCE ACTIVITIES
  GET_ACQUAINTED: 'GET_ACQUAINTED',
  EXPERIENCE_CULTURE_EVENT: 'EXPERIENCE_CULTURE_EVENT',
  VISIT_IN_COMMUNITY: 'VISIT_IN_COMMUNITY',
  HOST_VISITORS: 'HOST_VISITORS',
  JOIN_COMMUNITY_GROUP: 'JOIN_COMMUNITY_GROUP',

  // BASIC LEARNING ACTIVITIES - not sure this is still a category
  // Listen and Do Activities
  LISTEN_AND_DO_SILENT: 'LISTEN_AND_DO_SILENT',
  LISTEN_DO_AND_SPEAK: 'LISTEN_DO_AND_SPEAK',

  // INTERACTIVE ACTIVITIES
  COMMENT_ON_PHOTO_ANSWER_QUESTIONS: 'COMMENT_ON_PHOTO_ANSWER_QUESTIONS',
  TALK_ABOUT_PHOTO_ASK_QUESTIONS: 'TALK_ABOUT_PHOTO_ASK_QUESTIONS',

  // ROLE PLAY ACTIVITIES
  ELICIT_PRACTICAL_EXPRESSIONS: 'ELICIT_PRACTICAL_EXPRESSIONS',
  ACT_OUT_ROLE_PLAY: 'ACT_OUT_ROLE_PLAY',

  // RECORD AND PROCESS ACTIVITIES
  RECORD_LISTEN_PROCESS_1: 'RECORD_LISTEN_PROCESS_1',
  RECORD_LISTEN_PROCESS_2: 'RECORD_LISTEN_PROCESS_2',
  INTERVIEW_NATIVE_SPEAKER: 'INTERVIEW_NATIVE_SPEAKER',
  RECORD_NATIVE_SPEAKER_INTERACTION: 'RECORD_NATIVE_SPEAKER_INTERACTION',
  RECORD_NATIVE_SPEAKER_DISCUSSION: 'RECORD_NATIVE_SPEAKER_DISCUSSION',

  // MODELING ACTIVITIES
  RECORD_LISTEN_RETELL: 'RECORD_LISTEN_RETELL',
  RECORD_SELF_FOR_FEEDBACK: 'RECORD_SELF_FOR_FEEDBACK',
  LISTEN_MODEL_COMPARE: 'LISTEN_MODEL_COMPARE',

  // COMMUNITY PRACTICE ACTIVITIES
  REVIEW_VOCABULARY: 'REVIEW_VOCABULARY',
  HAVE_PREPLANNED_CONVERSATION: 'HAVE_PREPLANNED_CONVERSATION',
  DESCRIBE_OBJECT_EVENT_ROUTINE: 'DESCRIBE_OBJECT_EVENT_ROUTINE',
  TELL_STORY: 'TELL_STORY',
  CONTRAST_COMPARE: 'CONTRAST_COMPARE',
  DISCUSS_UNKNOWN_TOPICS: 'DISCUSS_UNKNOWN_TOPICS',
  PRODUCE_HIGH_LEVEL_GENRES: 'PRODUCE_HIGH_LEVEL_GENRES',

  // SOUND AND GRAMMAR ACTIVITIES
  // Focused Content Activities - not sure this is still a category
  PRACTICE_DIFFICULT_SOUNDS: 'PRACTICE_DIFFICULT_SOUNDS',
  PRACTICE_DIFFICULT_GRAMMAR_FEATURES: 'PRACTICE_DIFFICULT_GRAMMAR_FEATURES',
  ELICIT_GRAMMAR_FEATURES: 'ELICIT_GRAMMAR_FEATURES',

  // PLANNING AND PROCESSING ACTIVITIES
  PLAN_NEXT_DAY: 'PLAN_NEXT_DAY',
  PLAN_NEW_ACTIVITIES: 'PLAN_NEW_ACTIVITIES',
  PLAN_NEXT_UNIT: 'PLAN_NEXT_UNIT',
  PROCESS_PENDING_MEDIA: 'PROCESS_PENDING_MEDIA',

  // ASSESSMENT ACTIVITIES
  REFLECT_ON_PROGRESS: 'REFLECT_ON_PROGRESS',
  EVALUATE_PROGRESS: 'EVALUATE_PROGRESS',

  // ANALYSIS AND CONCLUSION ACTIVITIES
  REFLECT: 'REFLECT',
  ANALYZE: 'ANALYZE',
  FINALIZE_CONCLUSIONS: 'FINALIZE_CONCLUSIONS',

  // OBSOLETE
  RECORD_CLARIFY_EXPAND: 'RECORD_CLARIFY_EXPAND',
  INTERACT_ABOUT_SCENE: 'INTERACT_ABOUT_SCENE',
};

const PendingFileType = {
  GENERAL_RECORDER: 'GENERAL_RECORDER',
  PE_RECORDER: 'PE_RECORDER',
  DUAL_RECORDER: 'DUAL_RECORDER',
  QUICK_PHOTO: 'QUICK_PHOTO',
  VOICE_NOTE: 'VOICE_NOTE',
};

/**
 * Error types that we want to handle specially
 *
 * @readonly
 * @enum {string} */
const ErrorType = {
  OLD_MOBILE_VERSION: 'OLD_MOBILE_VERSION',
  NO_DESKTOP_USER: 'NO_DESKTOP_USER',
};

/**
 * Enum for table names
 *
 * NOTE:  all tables include properties createdAt and updatedAt, which are ISO date strings (e.g., '2022-06-20T15:50:40.055Z')
 *
 * @readonly
 * @enum {string}
 */
const TableNames = {
  USERS: 'Users',
  CULTURE_EVENTS: 'CultureEvents',
  GENERAL_RECORDINGS: 'GeneralRecordings',
  GENERAL_PHOTOS: 'GeneralPhotos',
  GENERAL_QUESTIONS: 'GeneralQuestions',
  MARKERS: 'Markers',
  PEOPLE: 'People',
  LOCATIONS: 'Locations',
  SEARCH_WORDS: 'SearchWords',
  TRUSTED_MACHINES: 'TrustedMachines',
  MOBILE_DEVICES: 'MobileDevices',
  DELETED_ITEMS: 'DeletedItems',
  TRANSCRIPTIONS: 'Transcriptions',
  DRE: 'DRE',
  ADVANCED_FILTERS: 'AdvancedFilters',
  PLAYLIST_ITEMS: 'PlaylistItems',
  PENDING_INVESTIGATIONS: 'PendingInvestigations',
  OBSERVATIONS: 'Observations',
  TAGS: 'Tags',
  ACTIVITY_PLANS: 'ActivityPlans',
  // PENDING_MEDIA: 'PendingMedia',
  TASK_BOX_SORT_ORDER: 'TaskBoxSortOrder',
  PHOTO_GROUPS: 'PhotoGroups',
  VOICE_NOTES: 'VoiceNotes',
};

/**
 * Enum for table names to sync from mobile to desktop.
 * Tables that are synced from desktop to mobile are listed in StagesApp-desktop dbSchema.js desktopTablesToSendToMobile
 * @readonly
 * @enum {string}
 */
const mobileTablesToSendToDesktop = [
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
  TableNames.ACTIVITY_PLANS,
  TableNames.TASK_BOX_SORT_ORDER,
];

const MOBILE_ALL_CLA_FILE_IDS = 'MOBILE_ALL_CLA_FILE_IDS';
const MOBILE_ALL_ACTIVITY_PLAN_IDS = 'MOBILE_ALL_ACTIVITY_PLAN_IDS';
const REQUESTED_CLA_FILE_IDS = 'REQUESTED_CLA_FILE_IDS';
const REQUESTED_ACTIVITY_PLAN_IDS = 'REQUESTED_ACTIVITY_PLAN_IDS';

const TASK_BOX_SORT_ORDER_ID = '8cf436a9-c7a2-4222-bf4f-3b047b93116a';

module.exports.TaskBox = TaskBox;
module.exports.Draggable = Draggable;
module.exports.RecorderButtonType = RecorderButtonType;
module.exports.PlayerType = PlayerType;
module.exports.CLAStage = CLAStage;
module.exports.ClaFileType = ClaFileType;
module.exports.AdvancedFilterType = AdvancedFilterType;
module.exports.ActivityKey = ActivityKey;
module.exports.ErrorType = ErrorType;
module.exports.PendingFileType = PendingFileType;
module.exports.TableNames = TableNames;
module.exports.mobileTablesToSendToDesktop = mobileTablesToSendToDesktop;
module.exports.MOBILE_ALL_CLA_FILE_IDS = MOBILE_ALL_CLA_FILE_IDS;
module.exports.MOBILE_ALL_ACTIVITY_PLAN_IDS = MOBILE_ALL_ACTIVITY_PLAN_IDS;
module.exports.REQUESTED_CLA_FILE_IDS = REQUESTED_CLA_FILE_IDS;
module.exports.REQUESTED_ACTIVITY_PLAN_IDS = REQUESTED_ACTIVITY_PLAN_IDS;
module.exports.TASK_BOX_SORT_ORDER_ID = TASK_BOX_SORT_ORDER_ID;

/**
 * Enum of the possible types of data transfers between mobile and desktop
 * @enum {string}
 */
module.exports.DataTransferType = {
  SYNC: 'SYNC',
  IMPORT_USER: 'IMPORT_USER',
};

module.exports.socketEndpoints = {
  // used for sync
  GET_PUBLIC_KEY: 'GET_PUBLIC_KEY',
  KEY_CHALLENGE: 'KEY_CHALLENGE',
  TRANSFER_TYPE: 'TRANSFER_TYPE',
  GET_LAST_SYNC_TIME: 'GET_LAST_SYNC_TIME',
  SEND_MOBILE_DATA: 'SEND_MOBILE_DATA',
  GET_DESKTOP_PHOTO: 'GET_DESKTOP_PHOTO',
  // GET_TABLE_ITEMS: 'GET_TABLE_ITEMS',  // Not currently used, but I'm leaving it here in case we ever want it.
  SEND_EXTRA_MOBILE_DATA: 'SEND_EXTRA_MOBILE_DATA',
  FINALIZE_DESKTOP: 'FINALIZE_DESKTOP',
};

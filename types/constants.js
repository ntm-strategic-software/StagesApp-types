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
 * @readonly
 * @enum {string}
 */const Draggable = {
  PI_DRAGGABLE: 'PI_DRAGGABLE', // Pending Investigation
  PHOTO_DRAGGABLE: 'PHOTO_DRAGGABLE',
  CE_DRAGGABLE: 'CE_DRAGGABLE',
  DRE_DRAGGABLE: 'DRE_DRAGGABLE',
  NOT_DRAGGABLE: 'NOT_DRAGGABLE', // Dragging not allowed
};

/**
 * Enum of recorder types
 * @readonly
 * @enum {string}
 */
const RecorderType = {
  GENERAL_RECORDER: 'GENERAL_RECORDER',
  DUAL_RECORDER: 'DUAL_RECORDER',
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
  STAGE_1: 'STAGE_1',
  STAGE_2: 'STAGE_2',
  STAGE_3: 'STAGE_3',
  STAGE_4: 'STAGE_4',
};

/**
 * Enum of the possible types of a CLA File
 * @enum {string}
 */
const ClaFileType = {
  CULTURE_EVENT: 'CULTURE_EVENT',
  DRE: 'DRE',
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
  // Community Experience Activities
  GET_ACQUAINTED: 'GET_ACQUAINTED',
  EXPERIENCE_CULTURE_EVENTS: 'EXPERIENCE_CULTURE_EVENTS',

  // BASIC LEARNING ACTIVITIES
  // Listen and Do Activities
  LISTEN_AND_DO_SILENT: 'LISTEN_AND_DO_SILENT',
  LISTEN_DO_AND_SPEAK: 'LISTEN_DO_AND_SPEAK',

  // Focused Content Activities
  PRACTICE_DIFFICULT_GRAMMAR_FEATURES: 'PRACTICE_DIFFICULT_GRAMMAR_FEATURES',



  LISTEN_MODEL_COMPARE: 'LISTEN_MODEL_COMPARE',
  RECORD_CLARIFY_EXPAND: 'RECORD_CLARIFY_EXPAND',
  INTERACT_ABOUT_SCENE: 'INTERACT_ABOUT_SCENE',
};

const PendingFileType = {
  GENERAL_RECORDER: 'GENERAL_RECORDER',
  DUAL_RECORDER: 'DUAL_RECORDER',
  QUICK_PHOTO: 'QUICK_PHOTO',
  VOICE_NOTE: 'VOICE_NOTE',
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
  PENDING_MEDIA: 'PendingMedia',
  TASK_BOX_SORT_ORDER: 'TaskBoxSortOrder',
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

module.exports.TaskBox = TaskBox;
module.exports.Draggable = Draggable;
module.exports.RecorderType = RecorderType;
module.exports.PlayerType = PlayerType;
module.exports.CLAStage = CLAStage;
module.exports.ClaFileType = ClaFileType;
module.exports.AdvancedFilterType = AdvancedFilterType;
module.exports.ActivityKey = ActivityKey;
module.exports.PendingFileType = PendingFileType;
module.exports.TableNames = TableNames;
module.exports.mobileTablesToSendToDesktop = mobileTablesToSendToDesktop;

/**
 * Enum of the possible types of data transfers between mobile and desktop
 * @enum {string}
 */
module.exports.DataTransferType = {
  SYNC: 'SYNC',
  IMPORT_USER: 'IMPORT_USER',
};

module.exports.socketEndpoints = {
  GET_PUBLIC_KEY: 'GET_PUBLIC_KEY',
  KEY_CHALLENGE: 'KEY_CHALLENGE',
  TRANSFER_TYPE: 'TRANSFER_TYPE',
  GET_LAST_SYNC_TIME: 'GET_LAST_SYNC_TIME',
  SEND_NEW_UPDATED_DATA: 'SEND_NEW_UPDATED_DATA',
  MOBILE_FILE_LISTS: 'MOBILE_FILE_LISTS',
  GET_DESKTOP_FILE_LISTS: 'GET_DESKTOP_FILE_LISTS',
  GET_DESKTOP_PHOTO: 'GET_DESKTOP_PHOTO',
  GET_TABLE_ITEMS: 'GET_TABLE_ITEMS',
  FINALIZE_DESKTOP: 'FINALIZE_DESKTOP',
  SEND_MOBILE_DATA: 'SEND_MOBILE_DATA',
};

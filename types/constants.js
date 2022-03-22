/**
 * Enum for a person's sex
 * @readonly
 * @enum {string}
 */
const Sex = {
  'MALE': 'MALE',
  'FEMALE': 'FEMALE',
};

/**
 * Enum for what a user is allowed to do
 * @readonly
 * @enum {string}
 */
const UserRestrictions = {
  'NORMAL_USER': 'NORMAL_USER',
  'SIMPLE_RECORD_ONLY': 'SIMPLE_RECORD_ONLY',
  'SIMPLE_RECORD_PLAY': 'SIMPLE_RECORD_PLAY',
  'COMPLEX_RECORD_PLAY': 'COMPLEX_RECORD_PLAY',
  'PLAY_ONLY': 'PLAY_ONLY',
};

/**
 * Enum for the CLA Stage that the user is in
 * @readonly
 * @enum {string}
 */
const CLAStage = {
  'STAGE_1': 'STAGE_1',
  'STAGE_2': 'STAGE_2',
  'STAGE_3': 'STAGE_3',
  'STAGE_4': 'STAGE_4',
};

/**
 * Enum for record status
 * @readonly
 * @enum {string}
 */
const RecordStatus = {
  'PLANNED': 'PLANNED',
  'RECORDED': 'RECORDED',
  'PROCESSED': 'PROCESSED',
  'IN_REVIEW': 'IN_REVIEW',
  'REVIEWED': 'REVIEWED',
};

/**
 * Enum for advanced filter type
 * @readonly
 * @enum {string}
 */
const AdvancedFilterType = {
  NORMAL_FILTER: 'NORMAL_FILTER',
  TRANSCRIPTION_FILTER: 'TRANSCRIPTION_FILTER',
};

/**
 * Enum for table names
 * @readonly
 * @enum {string}
 */
const TableNames = {
  'USERS': 'Users',
  'CULTURE_EVENTS': 'CultureEvents',
  'GENERAL_RECORDINGS': 'GeneralRecordings',
  'MARKERS': 'Markers',
  'PEOPLE': 'People',
  'LOCATIONS': 'Locations',
  'GENERAL_PHOTOS': 'GeneralPhotos',
  'QUESTIONS': 'QUESTIONS',
  'SEARCH_WORDS': 'SearchWords',
  'TRUSTED_MACHINES': 'TrustedMachines',
  'MOBILE_DEVICES': 'MobileDevices',
  'DELETED': 'Deleted',
  'TRANSCRIPTIONS': 'TRANSCRIPTIONS',
  'DRE': 'DRE',
  'ADVANCED_FILTERS': 'ADVANCED_FILTERS',
  'LISTENING_COLLECTION_ITEMS': 'LISTENING_COLLECTION_ITEMS',
  'PENDING_QUESTIONS': 'PENDING_QUESTIONS',
  'OBSERVATIONS': 'OBSERVATIONS',
  'TAGS': 'TAGS',
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
  TableNames.QUESTIONS,
  TableNames.SEARCH_WORDS,
  TableNames.DRE,
  TableNames.LISTENING_COLLECTION_ITEMS,
];

module.exports.Sex = Sex;
module.exports.UserRestrictions = UserRestrictions;
module.exports.RecordStatus = RecordStatus;
module.exports.CLAStage = CLAStage;
module.exports.AdvancedFilterType = AdvancedFilterType;
module.exports.TableNames = TableNames;
module.exports.mobileTablesToSendToDesktop = mobileTablesToSendToDesktop;

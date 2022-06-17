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
  CultureEvent: 'CultureEvent',
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
 * Enum for table names
 * @readonly
 * @enum {string}
 */
const TableNames = {
  USERS: 'Users',
  CULTURE_EVENTS: 'CultureEvents',
  GENERAL_RECORDINGS: 'GeneralRecordings',
  MARKERS: 'Markers',
  PEOPLE: 'People',
  LOCATIONS: 'Locations',
  GENERAL_PHOTOS: 'GeneralPhotos',
  QUESTIONS: 'Questions',
  SEARCH_WORDS: 'SearchWords',
  TRUSTED_MACHINES: 'TrustedMachines',
  MOBILE_DEVICES: 'MobileDevices',
  DELETED_ITEMS: 'DeletedItems',
  TRANSCRIPTIONS: 'Transcriptions',
  DRE: 'DRE',
  ADVANCED_FILTERS: 'AdvancedFilters',
  PLAYLIST_ITEMS: 'PlaylistItems',
  PENDING_QUESTIONS: 'PendingQuestions',
  OBSERVATIONS: 'Observations',
  TAGS: 'Tags',
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
  TableNames.PLAYLIST_ITEMS,
];

module.exports.CLAStage = CLAStage;
module.exports.ClaFileType = ClaFileType;
module.exports.AdvancedFilterType = AdvancedFilterType;
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

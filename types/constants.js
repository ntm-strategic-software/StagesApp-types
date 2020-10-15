/**
 * Enum for a person's sex
 * @readonly
 * @enum {string}
 */
const Sex = {
  'MALE': 'MALE',
  'FEMALE': 'FEMALE'
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
  'PLAY_ONLY': 'PLAY_ONLY'
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
  'STAGE_4': 'STAGE_4'
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
  'REVIEWED': 'REVIEWED'
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
  'TEXT_MARKERS': 'TEXT_MARKERS',
  'SMC': 'SMC'
};

module.exports.Sex = Sex;
module.exports.UserRestrictions = UserRestrictions;
module.exports.RecordStatus = RecordStatus;
module.exports.CLAStage = CLAStage;
module.exports.TableNames = TableNames;

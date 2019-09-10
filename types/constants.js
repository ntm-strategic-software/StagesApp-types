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
 * Enum for a person's sex
 * @readonly
 * @enum {string}
 */
const PersonSex = {
  'MALE': 'MALE',
  'FEMALE': 'FEMALE'
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

module.exports.RecordStatus = RecordStatus;
module.exports.PersonSex = PersonSex;
module.exports.CLAStage = CLAStage;

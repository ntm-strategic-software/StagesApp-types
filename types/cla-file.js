const { ClaFileType } = require('./constants');

/**
 * Class representing a CLA File.  This class is only used as a base class (super class).
 */
class CLAFile {
  /**
   * The type of CLA File this is (e.g., CultureEvent, DRE)
   * This method must be overridden in any class that extends CLAFile
   */
  claFileType() {}

  /**
   * file number
   * @type {number}
   */
  fileNumber = 0;

  /**
   * _id's of the ActivityPlans this CLA File is linked to.  If empty array, this CLA File was created without an ActivityPlan.
   *  To find a specific task in an ActivityPlan that is linked to this CLA File, search through the ActivityPlan's tasks for this
   *  CLA File's _id in taskClaFileId.
   *  _id's are appended to the end of the list when this CLA File is linked to an ActivityPlan.  So, the first
   *  ActivityPlan in the list is the one this CLA File was created through (or if the CLA File was not created
   *  through an Activity Plan, the first ActivityPlan this CLA File was linked to), unless the user explicitly
   *  disassociates this CLA File from that original ActivityPlan.
   * @type {string[]}
   */
  activityPlanIds = [];

  /**
   * Array of file numbers (not _id's)
   * @type {string[]}
   * @default []
   */
  linkedFiles = [];

  /**
   * true if the file was imported from a previous export
   * @type {boolean}
   */
  imported = false;

  /**
   * true if we should prevent editing the file
   * @type {boolean}
   */
  readOnly = false;

  /**
   * Do not show this item in Pending until User.getClaStageNumber() of the user's CLA Stage is at least this number.
   * @type {number}
   */
  deferToStage = 0;

  /**
   * if true, show this item in Pending (unless deferToStage prevents it)
   * @type {boolean}
   */
  canLinkToTask = false;

  /**
   * constructs a CLAFile instance
   * @param {CLAFile|Object} data
   * @param {number} data.fileNumber
   * @param {boolean} data.imported
   * @param {boolean} data.readOnly
   * @param {string[]} data.linkedFiles
   * @param {string} data.activityPlanId
   */
  constructor(data) {
    this.fileNumber = data.fileNumber || this.fileNumber;
    this.imported = data.imported || this.imported;
    this.readOnly = data.readOnly || this.readOnly;
    this.linkedFiles = data.linkedFiles || this.linkedFiles;
    this.activityPlanId = data.activityPlanId || this.activityPlanId;
  }

  /**
   * returns true if this CLAFile is a CultureEvent
   * @returns {boolean}
   */
  isCE() {
    return this.claFileType() === ClaFileType.CultureEvent;
  }

  /**
   * returns true if this CLAFile is a DRE
   * @returns {boolean}
   */
  isDRE() {
    return this.claFileType() === ClaFileType.DRE;
  }
}

module.exports = CLAFile;

import { CLAFile as CLAFileInterface, claFileDefaults } from '../cla-file';
import { ClaFileType } from '../constants';
import isNumber from "lodash/isNumber";

/**
 * Class representing a CLA File.  This class is only used as a base class (super class).
 */
export class CLAFile implements CLAFileInterface {

  /**
   * The type of CLA File this is (e.g., CultureEvent, DRE)
   * This method must be overridden in any class that extends CLAFile
   */
  claFileType(): ClaFileType|undefined {
    return;
  }

  /**
   * Unique ID for the CLA File
   */
  _id: string;

  /**
   * file number
   */
  fileNumber: number;

  /**
   * What overall CLA unit is this user in when this CLA File is created?
   */
  claUnit: number;

  /**
   * Title of the CLA File
   */
  title: string;

  /**
   * CLA File notes.  For a DRE, any notes the user wants to make about the DRE.  Might be about the topic or genre or the
   * helper used, the situation, etc.
   */
  note: string;

  /**
   * _id's of the ActivityPlans this CLA File is linked to.  If empty array, this CLA File was created without an ActivityPlan.
   *  To find a specific task in an ActivityPlan that is linked to this CLA File, search through the ActivityPlan's tasks for this
   *  CLA File's _id in taskClaFileId.
   *  _id's are appended to the end of the list when this CLA File is linked to an ActivityPlan.  So, the first
   *  ActivityPlan in the list is the one this CLA File was created through (or if the CLA File was not created
   *  through an Activity Plan, the first ActivityPlan this CLA File was linked to), unless the user explicitly
   *  disassociates this CLA File from that original ActivityPlan.
   */
  activityPlanIds: string[];

  /**
   * Array of file numbers (not _id's)
   */
  linkedFiles: string[];

  /**
   * true if the file was imported from a previous export
   */
  imported: boolean;

  /**
   * true if we should prevent editing the file
   */
  readOnly: boolean;

  /**
   * Do not show this item in Pending until User.getClaStageNumber() of the user's CLA Stage is at least this number.
   */
  deferToStage: number;

  /**
   * if true, show this item in Pending (unless deferToStage prevents it)
   */
  canLinkToTask: boolean;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * constructs a CLAFile instance
   */
  constructor(data?: CLAFileInterface) {
    const defaults = claFileDefaults();
    this._id = data?._id || defaults._id;
    this.fileNumber = data?.fileNumber || defaults.fileNumber;
    const claUnit = data?.claUnit;
    this.claUnit = isNumber(claUnit) ? claUnit : defaults.claUnit;
    this.title = data?.title || defaults.title;
    this.note = data?.note || defaults.note;
    this.activityPlanIds = data?.activityPlanIds || defaults.activityPlanIds;
    this.linkedFiles = data?.linkedFiles || defaults.linkedFiles;
    this.imported = data?.imported || defaults.imported;
    this.readOnly = data?.readOnly || defaults.readOnly;
    this.deferToStage = data?.deferToStage || defaults.deferToStage;
    this.canLinkToTask = data?.canLinkToTask || defaults.canLinkToTask;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * returns true if this CLAFile is a CultureEvent
   */
  isCE(): boolean {
    return this.claFileType() === ClaFileType.CULTURE_EVENT;
  }

  /**
   * returns true if this CLAFile is a DRE
   */
  isDRE(): boolean {
    return this.claFileType() === ClaFileType.DRE;
  }

  /**
   * returns true if this CLAFile is a PE
   */
  isPE(): boolean {
    return this.claFileType() === ClaFileType.PE;
  }

  /**
   * returns true if this CLAFile is a Simple DRE
   */
  isSimpleDRE(): boolean {
    return this.claFileType() === ClaFileType.SIMPLE_DRE;
  }
}

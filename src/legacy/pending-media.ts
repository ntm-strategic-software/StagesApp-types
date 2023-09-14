import { pendingMediaDefaults, PendingMedia as PendingMediaInterface } from '../pending-media';
import { PendingFileType } from '../constants';

/**
 * OBSOLETE, BUT I'M LEAVING IT FOR NOW FOR REFERENCE IN CASE WE WANT TO GO BACK TO SOMETHING LIKE THIS.
 * Class representing an item of type PendingFileType.  This is a file created on Mobile but not through a Task, so the file is not linked to an ActivityPlan.
 * I.e., a quick photo, a voice note, or a CE or DRE created by the user going straight to the recorder instead of through a Task.
 */
export class PendingMedia implements PendingMediaInterface {

  /**
   * Unique ID for the PendingMedia.  For CLA Files, this is the CLA File's _id
   */
  _id: string;

  /**
   * Type of Pending Media
   */
  fileType: PendingFileType|'';

  /**
   * Do not show this item in Pending until User.getClaStageNumber() of the user's CLA Stage is at least this number.
   */
  deferToStage: number;

  /**
   * Title of the PendingMedia file.  Empty string for CEs and DREs:  we get their titles from the CE or DRE record itself.
   */
  title: string;

  /**
   * Filename of this Pending Media (no path, but does include extension).  Empty string for CEs and DREs.
   */
  filename: string;

  /**
   * True if the user has indicated this should show in All Media instead of Unprocessed Media in the Planner's Media tab
   */
  isProcessed: boolean;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Constructs an PendingMedia object
   */
  constructor(data?: PendingMediaInterface) {
    const defaults = pendingMediaDefaults();
    this._id = data?._id || defaults._id;
    this.fileType = data?.fileType || defaults.fileType;
    this.deferToStage = data?.deferToStage || defaults.deferToStage;
    this.title = data?.title || defaults.title;
    this.filename = data?.filename || defaults.filename;
    this.isProcessed = data?.isProcessed || defaults.isProcessed;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated PendingMedia object
   */
  set(data: Partial<PendingMediaInterface>) {
    return new PendingMedia({
      ...this,
      ...data,
    });
  }

}

import {
  pendingInvestigationDefaults,
  PendingInvestigation as PendingInvestigationInterface
} from '../pending-investigation';

/**
 * An idea or question the user has, optionally associated with a CLAFile
 */
export class PendingInvestigation implements PendingInvestigationInterface {

  /**
   * Unique ID for the PendingInvestigation
   */
  _id: string;

  /**
   * Idea/Question plain text
   */
  text: string;

  /**
   * fileNumber of linked CLAFile, as a string
   */
  linkedFile: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Creates a PendingInvestigation object
   */
  constructor(data?: PendingInvestigationInterface) {
    const defaults = pendingInvestigationDefaults();
    this._id = data?._id || defaults._id;
    this.text = data?.text || defaults.text;
    this.linkedFile = data?.linkedFile || defaults.linkedFile;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated PendingInvestigation object
   */
  set(data: Partial<PendingInvestigationInterface>) {
    return new PendingInvestigation({
      ...this,
      ...data,
    });
  }

}

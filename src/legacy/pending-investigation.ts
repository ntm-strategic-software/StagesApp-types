import {
  pendingInterfaceDefaults,
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
   * Creates a PendingInvestigation object
   */
  constructor(data?: PendingInvestigationInterface) {
    const defaults = pendingInterfaceDefaults();
    this._id = data?._id || defaults._id;
    this.text = data?.text || defaults.text;
    this.linkedFile = data?.linkedFile || defaults.linkedFile;
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

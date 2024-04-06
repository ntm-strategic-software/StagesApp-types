import {
  pendingIdeaDefaults,
  PendingIdea as pendingIdeaInterface
} from '../pending-idea';

/**
 * An idea or question the user has, optionally associated with a CLAFile
 */
export class PendingIdea implements pendingIdeaInterface {

  /**
   * Unique ID for the PendingIdea
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
   * Do not show this item in Pending until User.getClaStageNumber() of the user's CLA Stage is at least this number.
   */
  deferToStage: number;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Creates a PendingIdea object
   */
  constructor(data?: pendingIdeaInterface) {
    const defaults = pendingIdeaDefaults();
    this._id = data?._id || defaults._id;
    this.text = data?.text || defaults.text;
    this.linkedFile = data?.linkedFile || defaults.linkedFile;
    this.deferToStage = data?.deferToStage || defaults.deferToStage;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated PendingIdea object
   */
  set(data: Partial<pendingIdeaInterface>) {
    return new PendingIdea({
      ...this,
      ...data,
    });
  }

}

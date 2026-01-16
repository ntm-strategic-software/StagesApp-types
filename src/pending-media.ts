import { PendingFileType } from './constants';

/**
 * OBSOLETE, BUT LEAVING IT FOR NOW FOR REFERENCE IN CASE WE WANT TO GO BACK TO SOMETHING LIKE THIS.
 * Represents an item of type PendingFileType. This is a file created on Mobile but not through a Task, so the file is not linked to an ActivityPlan.
 * I.e., a quick photo, a quick note, or a CE or DRE created by the user going straight to the recorder instead of through a Task.
 */
export interface PendingMedia {
  /** Unique ID for the PendingMedia. For CLA Files, this is the CLA File's _id */
  _id: string
  /** Type of Pending Media */
  fileType: PendingFileType | ''
  /** Do not show this item in Pending until User.getClaStageNumber() of the user's CLA Stage is at least this number. */
  deferToStage: number
  /** Title of the PendingMedia file. Empty string for CEs and DREs: we get their titles from the CE or DRE record itself. */
  title: string
  /** Filename of this Pending Media (no path, but does include extension). Empty string for CEs and DREs. */
  filename: string
  /** True if the user has indicated this should show in All Media instead of Unprocessed Media in the Planner's Media tab */
  isProcessed: boolean
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewPendingMedia is PendingMedia with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewPendingMedia extends Omit<PendingMedia, 'createdAt' | 'updatedAt'> {
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database.
   * If not provided, it should be set when the row is created in the database.
   */
  createdAt?: string
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database.
   * If not provided, it should be set when the row is updated in the database.
   */
  updatedAt?: string
}

/** Returns a new PendingMedia object with default values */
export const pendingMediaDefaults = (): PendingMedia => ({
  _id: '',
  fileType: '',
  deferToStage: 0,
  title: '',
  filename: '',
  isProcessed: false,
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for PendingMedia */
export interface PendingMediaHelper {
  set(item: PendingMedia, data: Partial<PendingMedia>): PendingMedia
}
/** Object with helper methods for PendingMedia */
export const pendingMediaHelper = {
  /** Creates an updated PendingMedia object by merging an existing PendingMedia object with new values */
  set(item: PendingMedia, data: Partial<PendingMedia>): PendingMedia {
    return {
      ...item,
      ...data,
    };
  },
};

/**
 * An idea or question the user has, optionally associated with a CLAFile.  Something they want to investigate..
 */
export interface PendingIdea {
  /** Unique ID for the PendingIdea */
  _id: string
  /** Idea/Question plain text */
  text: string
  /** fileNumber of linked CLAFile, as a string */
  linkedFile: string
  /** Do not show this item in Pending until User.getClaStageNumber() of the user's CLA Stage is at least this number. */
  deferToStage: number
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewPendingIdea is PendingIdea with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewPendingIdea extends Omit<PendingIdea, 'createdAt' | 'updatedAt'> {
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

/** Returns a new PendingIdea object with default values */
export const pendingIdeaDefaults = (): PendingIdea => ({
  _id: '',
  text: '',
  linkedFile: '',
  deferToStage: 0,
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for PendingIdea */
export interface PendingIdeaHelper {
  set(item: PendingIdea, data: Partial<PendingIdea>): PendingIdea
}
/** Object with helper methods for PendingIdea */
export const pendingIdeaHelper = {
  /** Creates an updated PendingIdea object by merging an existing PendingIdea object with new values */
  set(item: PendingIdea, data: Partial<PendingIdea>): PendingIdea {
    return {
      ...item,
      ...data,
    };
  },
};

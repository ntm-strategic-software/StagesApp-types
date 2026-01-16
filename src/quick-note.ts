/**
 * Represents an audio or text Quick Note. It is recorded or typed on Mobile using the Quick Note recorder.
 */
export interface QuickNote {
  /** Unique ID for the QuickNote */
  _id: string
  /** If this Quick Note has audio, this is the filename of the audio (no path, but does include extension) */
  filename: string
  /** If this Quick Note has text, this is the text */
  quickText: string
  /** True if this Quick Note has been archived */
  isArchived: boolean
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewQuickNote is QuickNote with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewQuickNote extends Omit<QuickNote, 'createdAt' | 'updatedAt'> {
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

/** Returns a new QuickNote object with default values */
export const quickNoteDefaults = () => ({
  _id: '',
  filename: '',
  quickText: '',
  isArchived: false,
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for QuickNote */
export interface QuickNoteHelper {
  set(quickNote: QuickNote, data: Partial<QuickNote>): QuickNote
}
/** Object with helper methods for QuickNote */
export const quickNoteHelper: QuickNoteHelper = {
  /** Creates an updated QuickNote object by merging an existing QuickNote object with new values */
  set(quickNote: QuickNote, data: Partial<QuickNote>): QuickNote {
    return {
      ...quickNote,
      ...data,
    };
  },
};

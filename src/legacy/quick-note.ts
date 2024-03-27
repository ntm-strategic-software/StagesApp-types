import { QuickNote as QuickNoteInterface, quickNoteDefaults } from '../quick-note';

/**
 * Class representing an audio or text Quick Note.  It is recorded or typed on Mobile using the Quick Note recorder.
 */
export class QuickNote implements QuickNoteInterface {
  /**
   * Unique ID for the QuickNote.
   */
  _id: string;

  /**
   * If this Quick Note has audio, this is the filename of the audio (no path, but does include extension).
   */
  filename: string;

  /**
   * If this Quick Note has text, this is the text.
   */
  quickText: string;

  /**
   */
  isArchived: boolean;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Constructs an QuickNote object
   */
  constructor(data?: QuickNoteInterface) {
    const defaults = quickNoteDefaults();
    this._id = data?._id || defaults._id;
    this.filename = data?.filename || defaults.filename;
    this.quickText = data?.quickText || defaults.quickText;
    this.isArchived = data?.isArchived || defaults.isArchived;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated QuickNote object
   */
  set(data: Partial<QuickNoteInterface>) {
    return new QuickNote({
      ...this,
      ...data,
    });
  }

}

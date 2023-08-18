import { VoiceNote as VoiceNoteInterface, voiceNoteDefaults } from '../voice-note';

/**
 * Class representing a Quick Voice Note.  This audio file is recorded on Mobile using the Quick Voice Note recorder.
 */
export class VoiceNote implements VoiceNoteInterface {
  /**
   * Unique ID for the VoiceNote.
   */
  _id: string;

  /**
   * Title of the VoiceNote file.
   */
  title: string;

  /**
   * Filename of this Voice Note (no path, but does include extension).
   */
  filename: string;

  /**
   */
  isArchived: boolean;

  /**
   * Constructs an VoiceNote object
   */
  constructor(data?: VoiceNoteInterface) {
    const defaults = voiceNoteDefaults();
    this._id = data?._id || defaults._id;
    this.title = data?.title || defaults.title;
    this.filename = data?.filename || defaults.filename;
    this.isArchived = data?.isArchived || defaults.isArchived;
  }

  /**
   * Creates an updated VoiceNote object
   */
  set(data: any) {
    return new VoiceNote({
      ...this,
      ...data,
    });
  }

}

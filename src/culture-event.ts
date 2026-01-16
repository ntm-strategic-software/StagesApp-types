import { CLAFile, claFileDefaults } from './cla-file';

/**
 * Represents a Culture Event (our internal term in the software. In the UI and in Engage, this is called a General Recorder file.)
 *
 * When the user records something with the General Recorder, multiple GeneralRecording objects will be created
 * as the user switches between audio and video modes, or takes pictures while recording is paused. When the user
 * is done recording, he enters metadata, and saves.
 * At that point one of these CultureEvent objects is created.
 *
 * So a CultureEvent is a creation of the General Recorder, and includes:
 *   - potentially multiple GeneralRecordings
 *   - metadata about the setting, etc.
 *   - the results of the user processing the recording (transcribing, tagging, etc.)
 */
export interface CultureEvent extends CLAFile {
  /**
   * A PE (Practical Expression) is a type of CultureEvent. Both are created with the General Recorder.
   * But we use _isPE to distinguish between PE's and CultureEvents.
   * In the UI and Engage, a PE is now called a UP (Useful Phrase).
   */
  _isPE: boolean
  /** Array of IDs of search words */
  searchWords: string[]
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the CultureEvent was initially saved */
  date: string
  /** Array of Person IDs of those who spoke in the generalRecordings of this CultureEvent */
  speakers: string[]
  /** Location ID of where the event took place */
  location: string
  /** The audience of the event */
  audience: string
  /** Array of strings from Tag.tagText */
  tags: string[]
  /**
   * Array of GeneralRecording Item IDs for all GeneralRecordings that make up this CultureEvent.
   * The General Recorder in the mobile app creates a new GeneralRecording item when the user switches
   * between audio, video, or takes a picture while recording is paused.
   */
  generalRecordings: string[]
  /**
   * Phonetic Transcription in plain text.
   * Per Bill, we do not support splitting the phonetic text into sections like we do with the orthographic text.
   * Phonetic text for a CultureEvent is stored all in one simple string.
   */
  phoneticTranscription: string
}
/** Returns a new CultureEvent object with default values */
export const cultureEventDefaults = (): CultureEvent => ({
  ...claFileDefaults(),
  _isPE: false,
  searchWords: [],
  date: '',
  speakers: [],
  location: '',
  audience: '',
  tags: [],
  generalRecordings: [],
  phoneticTranscription: '',
});

/** Interface defining helper methods for CultureEvent */
export interface CultureEventHelper {
  set(ce: CultureEvent, data: Partial<CultureEvent>): CultureEvent
}
/** Object with helper methods for CultureEvent */
export const cultureEventHelper: CultureEventHelper = {
  /** Creates an updated CultureEvent object by merging an existing CultureEvent object with new values */
  set(ce: CultureEvent, data: Partial<CultureEvent>): CultureEvent {
    return {
      ...ce,
      ...data,
    };
  },
};

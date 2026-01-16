/**
 * Represents the transcription of a section of a CultureEvent. A single Transcription may cross GeneralRecording boundaries.
 * Translation and metadata can be associated with the transcription.
 */
export interface Transcription {
  /** Unique ID for the Transcription */
  _id: string
  /** Optional title the user may give to this Transcription */
  title: string
  /** Array of SearchWord._id's */
  searchWords: string[]
  /** Array of strings from Tag.tagText */
  tags: string[]
  /**
   * Array of gridItem keys from CultureGrid on Desktop, in the form of row key, hyphen, column key.
   * Example: causeEffect–kinship
   */
  gridItems: string[]
  /** The transcribed text. This is expected to be in the orthography of the target language. */
  text: string
  /** A translation of Transcription.text into the user's language */
  translation: string
  /** Any note the user wants to make about this Transcription */
  note: string
  /** _id of the CultureEvent this Transcription is a part of */
  cultureEvent: string
  /** The order of this Transcription in relation to all other Transcriptions for this CultureEvent */
  idx: number
  /**
   * Starting time of the transcription, in seconds (with decimals), from the beginning of the CultureEvent.
   * If there are multiple GeneralRecordings in the CultureEvent, this is the time from the beginning of the first GeneralRecording.
   */
  transcriptionStartTime: number
  /**
   * see gh216 in desktop. Per Bill, we don't need this, but since we were already calculating it, we are leaving it in
   * just in case we want to use it later.
   * Ending time of the transcription, in seconds (with decimals), from the beginning of the CultureEvent.
   * Currently, this is the ending time of the last loop used when creating/editing the text of transcription.
   */
  transcriptionEndTime: number
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewTranscription is Transcription with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewTranscription extends Omit<Transcription, 'createdAt' | 'updatedAt'> {
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

/** Returns a new Transcription object with default values */
export const transcriptionDefaults = (): Transcription => ({
  _id: '',
  title: '',
  searchWords: [],
  tags: [],
  gridItems: [],
  text: '',
  translation: '',
  note: '',
  cultureEvent: '',
  idx: 0,
  transcriptionStartTime: 0,
  transcriptionEndTime: 0,
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for Transcription */
export interface TranscriptionHelper {
  set(item: Transcription, data: Partial<Transcription>): Transcription
}
/** Object with helper methods for Transcription */
export const transcriptionHelper: TranscriptionHelper = {
  /** Creates an updated Transcription object by merging an existing Transcription object with new values */
  set(item: Transcription, data: Partial<Transcription>): Transcription {
    return {
      ...item,
      ...data,
    };
  },
};

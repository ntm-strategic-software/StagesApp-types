/**
 * Represents a General Recording.
 *
 * The General Recorder in the mobile app creates a new GeneralRecording item when the user switches
 * between audio, video, or takes a picture while recording is paused.
 * All of these GeneralRecordings are then associated with a single CultureEvent object
 * when the user taps Done in the General Recorder, enters metadata, and saves.
 *
 * Note: If a picture is taken while recording is paused, a few-second silent audio GeneralRecording is created that
 * the photo is linked to.
 */
export interface GeneralRecording {
  /** Unique ID for the recording */
  _id: string
  /** True if it is a video recording; false if it is an audio recording */
  isVideo: boolean
  /** Filename of the recording (no path, but does include extension) */
  filename: string
  /** Duration of the recording in seconds */
  duration: number
  /**
   * Array of IDs of markers from the recording.
   * Currently, our mobile code is commented out for full Marker support, but we still create a marker
   * at the beginning of a GeneralRecording. The functionality is very similar to GeneralQuestions.
   */
  markers: string[]
  /** Array of GeneralQuestions ids from the recording */
  questions: string[]
  /** Array of GeneralPhotos IDs from the recording */
  photos: string[]
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewGeneralRecording is GeneralRecording with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewGeneralRecording extends Omit<GeneralRecording, 'createdAt' | 'updatedAt'> {
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

/** Returns a new GeneralRecording object with default values */
export const generalRecordingDefaults = (): GeneralRecording => ({
  _id: '',
  isVideo: false,
  filename: '',
  duration: 0,
  markers: [],
  questions: [],
  photos: [],
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for GeneralRecording */
export interface GeneralRecordingHelper {
  set(recording: GeneralRecording, data: Partial<GeneralRecording>): GeneralRecording
}
/** Object with helper methods for GeneralRecording */
export const generalRecordingHelper: GeneralRecordingHelper = {
  /** Creates an updated GeneralRecording object by merging an existing GeneralRecording object with new values */
  set(recording: GeneralRecording, data: Partial<GeneralRecording>): GeneralRecording {
    return {
      ...recording,
      ...data,
    };
  },
};

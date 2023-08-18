import { GeneralRecording as GeneralRecordingInterface, generalRecordingDefaults } from '../general-recording';

/**
 * Class representing a General Recording.
 *
 * The General Recorder in the mobile app creates a new GeneralRecording item when the user switches between audio,
 * video, or takes a picture while recording is paused.  All of these GeneralRecordings are then associated with
 * a single CultureEvent object when the user taps Done in the General Recorder, enters metadata, and saves.
 *
 * Note:  If a picture is taken while recording is paused, a few-second silent audio GeneralRecording is created that
 * the photo is linked to.
 */
export class GeneralRecording implements GeneralRecordingInterface {

  /**
   * Unique ID for the recording
   */
  _id: string

  /**
   * true if it is a video recording; false if it is an audio recording.
   */
  isVideo: boolean

  /**
   * Filename of the recording (no path, but does include extension)
   */
  filename: string

  /**
   * Array of IDs of markers from the recording.
   * Currently, our mobile code is commented out for full Marker support, but we still create a marker at the
   * beginning of a GeneralRecording.  The functionality is very similar to GeneralQuestions.
   */
  markers: string[]

  /**
   * Array of GeneralQuestions ids from the recording
   */
  questions: string[]

  /**
   * Array of GeneralPhotos IDs from the recording
   */
  photos: string[]

  /**
   * Creates a GeneralRecording object
   */
  constructor(data?: GeneralRecordingInterface) {
    const defaults = generalRecordingDefaults();
    this._id = data?._id || defaults._id;
    this.isVideo = data?.isVideo || defaults.isVideo;
    this.filename = data?.filename || defaults.filename;
    this.markers = data?.markers || defaults.markers;
    this.questions = data?.questions || defaults.questions;
    this.photos = data?.photos || defaults.photos;
  }

  /**
   * Creates an updated GeneralRecording object
   */
  set(data: Partial<GeneralRecordingInterface>) {
    return new GeneralRecording({
      ...this,
      ...data,
    });
  }

}

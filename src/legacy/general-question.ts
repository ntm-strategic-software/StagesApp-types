import { GeneralQuestion as GeneralQuestionInterface, generalQuestionDefaults } from '../general-question';

/**
 * A GeneralQuestion is associated with a GeneralRecording, and is created when the user:
 * - Mobile:  taps the GeneralQuestion button while recording a GeneralRecording
 * - Desktop:  right-clicks and adds a question on the recording
 *
 * For convenience, the id of the CultureEvent that the GeneralRecording is associated with is included in the GeneralQuestion,
 * so we don't have to trace back through the GeneralRecording to get to the CultureEvent.
 */
export class GeneralQuestion implements GeneralQuestionInterface {

  /**
   * Unique ID for the GeneralQuestion
   */
  _id = '';

  /**
   * ID of the CultureEvent this question is associated with, for convenience
   */
  cultureEvent = '';

  /**
   * Time of the question marker, in seconds (with decimals), from the beginning of the GeneralRecording that this question is on (see GeneralRecording.questions)
   */
  startTime = 0;

  /**
   * On Mobile, user can tap a Question marker when reviewing a CultureEvent to record a question.
   * filename does not include a path, but does include extension.
   */
  filename = '';

  /**
   * On Desktop, user can click a Question marker when reviewing a CultureEvent and type their question
   */
  text = '';

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   */
  constructor(data?: GeneralQuestionInterface) {
    const defaults = generalQuestionDefaults();
    this._id = data?._id || defaults._id;
    this.cultureEvent = data?.cultureEvent || defaults.cultureEvent;
    this.startTime = data?.startTime || defaults.startTime;
    this.filename = data?.filename || defaults.filename;
    this.text = data?.text || defaults.text;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated GeneralQuestion object
   */
  set(data: Partial<GeneralQuestionInterface>) {
    return new GeneralQuestion({
      ...this,
      ...data,
    });
  }

}

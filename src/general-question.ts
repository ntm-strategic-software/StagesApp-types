/**
 * A GeneralQuestion is associated with a GeneralRecording, and is created when the user:
 * - Mobile:  taps the GeneralQuestion button while recording a GeneralRecording
 * - Desktop:  right-clicks and adds a question on the recording
 *
 * For convenience, the id of the CultureEvent that the GeneralRecording is associated with is included in the GeneralQuestion,
 * so we don't have to trace back through the GeneralRecording to get to the CultureEvent.
 */
export interface GeneralQuestion {
    /** Unique ID for the GeneralQuestion */
    _id: string
    /** ID of the CultureEvent this question is associated with, for convenience */
    cultureEvent: string
    /**
     * Time of the question marker, in seconds (with decimals), from the beginning of the GeneralRecording that this question is on
     * (see GeneralRecording.questions)
     */
    startTime: number
    /**
     * On Mobile, user can tap a Question marker when reviewing a CultureEvent to record a question.
     * filename does not include a path, but does include extension.
     */
    filename: string
    /** On Desktop, user can click a Question marker when reviewing a CultureEvent and type their question */
    text: string
    /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
    createdAt: string
    /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
    updatedAt: string
}

/**
 * NewGeneralQuestion is GeneralQuestion with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewGeneralQuestion extends Omit<GeneralQuestion, 'createdAt' | 'updatedAt'> {
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

/** Returns a new GeneralQuestion object with default values */
export const generalQuestionDefaults = (): GeneralQuestion => ({
    _id: '',
    cultureEvent: '',
    startTime: 0,
    filename: '',
    text: '',
    createdAt: '',
    updatedAt: '',
});

/** Interface defining helper methods for GeneralQuestion */
export interface GeneralQuestionHelper {
  set(question: GeneralQuestion, data: Partial<GeneralQuestion>): GeneralQuestion
}
/** Object with helper methods for GeneralQuestion */
export const generalQuestionHelper: GeneralQuestionHelper = {
  /** Creates an updated GeneralQuestion object by merging an existing GeneralQuestion object with new values */
  set(question: GeneralQuestion, data: Partial<GeneralQuestion>): GeneralQuestion {
    return {
      ...question,
      ...data,
    };
  },
};

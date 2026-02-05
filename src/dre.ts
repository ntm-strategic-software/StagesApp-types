import { CLAFile, claFileDefaults } from './cla-file';

/** Object with details for each highlight color in splitText rows */
export type SplitTextColorDetails = ({[key: string]: {observations: string, notes: string}} | object)[]
/** Array of array of objects representing highlighted text segments */
export type SplitCompareText = ({text: string, className: string})[][];

/**
 * Represents a Dual Recorder Event (our internal name. In the UI and Engage, a Dual Recorder file).
 *
 * The user records a native, then records himself telling the same story. The desktop Stages app has tools
 * to enable the user to transcribe and compare the two texts, to aid in higher-level language learning
 * (basic discourse analysis).
 */
export interface DRE extends CLAFile {
  /**
   * A Simple DRE is a type of DRE where the user will only make notes, not transcribe, align, etc.
   * Both are created with the Dual Recorder. We use _isSimple to distinguish between Simple DREs and normal DREs.
   */
  _isSimple: boolean
  /**
   * Recording 1 file names (no path, but do include the extension).
   * Multiple files occur if the user pauses recording, then continues recording.
   */
  recording1: string[]
  /**
   * Recording 2 file names (no path, but do include the extension).
   * Multiple files occur if the user pauses recording, then continues recording.
   */
  recording2: string[]
  /** The speaker in recording1 (_id of the speaker in the Person table) */
  speaker1: string
  /** The speaker in recording2 (_id of the speaker in the Person table) */
  speaker2: string
  /** Transcription 1 plain text */
  transcription1: string
  /** Transcription 2 plain text */
  transcription2: string
  /** Transcription1, broken into sections by the user to match equivalent sections of transcription2 */
  splitText1: string[]
  /** Transcription2, broken into sections by the user to match equivalent sections of transcription1 */
  splitText2: string[]

    /**
   * Observations and Notes by color, for each row of this DRE.
   * For className, see StagesApp-Desktop 'highlights' constant main.scss $text-highlights.
   * Observations are intended to be entered while comparing texts.
   * Notes are intended to be entered after discussing Observations with the helper.
   *
   * Example where the DRE text has been aligned into 4 rows (splitText1 and splitText2 have lengths of 4),
   * and the second and third rows have some highlighting:
   * @example
   * [ {},
   *   { 'text-highlight-7': { observations: 'I used na before every paragraph, but he used na, da, dyadi, and tebes.', notes: '' }, { 'text-highlight-3': { observations: '', notes: '' } },
   *   { 'text-highlight-3': { observations: 'why did he add -em?', notes: 'he said that suffix is used on verbs when children perform the action' } },
   *   {},
   * ]
   */
  splitTextColorDetails: SplitTextColorDetails
  /**
   * Array of array of objects. Each string in splitText1 is here broken into
   *  an array of objects of shape: { text: string, className: string }.
   *  If the text has been highlighted by the user on the Compare Transcriptions tab,
   *  className will be set to the highlight number, which corresponds to a color in the desktop app.
   *  If the text has not been highlighted, className will be an empty string.
   *
   * Example (except the text will be orthographic):
   * @example
   * { text: 'The story begins like this', className: 'text-highlight-6' }
   */
  splitCompareText1: SplitCompareText
  /**
   * Array of array of objects. Each string in splitText2 is here broken into
   * an array of objects of shape: { text: string, className: string }.
   *  If the text has been highlighted by the user on the Compare Transcriptions tab,
   *  className will be set to the highlight number, which corresponds to a color in the desktop app.
   *  If the text has not been highlighted, className will be an empty string.
   *
   *  Example (except the text will be orthographic):
   * @example
   * { text: 'Here is how the story begins', className: 'text-highlight-6' }
   */
  splitCompareText2: SplitCompareText
}

/**
 * NewDRE is DRE with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewDRE extends Omit<DRE, 'createdAt' | 'updatedAt'> {
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

/** Returns a new DRE object with default values */
export const dreDefaults = (): DRE => ({
  ...claFileDefaults(),
  _isSimple: false,
  recording1: [],
  recording2: [],
  speaker1: '',
  speaker2: '',
  transcription1: '',
  transcription2: '',
  splitText1: [],
  splitText2: [],
  splitTextColorDetails: [],
  splitCompareText1: [],
  splitCompareText2: [],
});

/** Interface defining helper methods for DRE */
export interface DreHelper {
  set(dre: DRE, data: Partial<DRE>): DRE
}
/** Object with helper methods for DRE */
export const dreHelper: DreHelper = {
  /** Creates an updated DRE object by merging an existing DRE object with new values */
  set(dre: DRE, data: Partial<DRE>): DRE {
    return {
      ...dre,
      ...data,
    };
  },
};

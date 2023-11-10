import { DRE as DREInterface, dreDefaults, SplitCompareText1, SplitTextColorDetails } from '../dre';
import { ClaFileType } from '../constants';
import { CLAFile } from './cla-file';
import isNumber from 'lodash/isNumber';

/**
 * Class representing a Dual Recorder Event (our internal name.  In the UI and Engage, a Dual Recorder file.)
 *
 * The user records a native, then records himself telling the same story.  The desktop Stages app has tools
 * to enable the user to transcribe and compare the two texts, to aid in higher-level language learning.
 *
 * @extends CLAFile
 */
export class DRE extends CLAFile implements DREInterface {

  claFileType() {
    return ClaFileType.DRE;
  }

  _id: string;
  claUnit: number;
  title: string;
  note: string;
  fileNumber: number;
  activityPlanIds: string[];
  linkedFiles: string[];
  imported: boolean;
  readOnly: boolean;
  deferToStage: number;
  canLinkToTask: boolean;
  createdAt?: string;
  updatedAt?: string;

  /**
   * Recording 1 file name (no path, but does include the extension)
   */
  recording1: string;

  /**
   * Recording 2 file name (no path, but does include the extension)
   */
  recording2: string;

  /**
   * the speaker in recording1 (_id of the speaker in the Person table)
   */
  speaker1: string;

  /**
   * the speaker in recording2 (_id of the speaker in the Person table)
   */
  speaker2: string;

  /**
   * Transcription 1 plain text
   */
  transcription1: string;

  /**
   * Transcription 2 plain text
   */
  transcription2: string;

  /**
   * transcription1, broken into sections by the user to match equivalent sections of transcription2
   */
  splitText1: string[];

  /**
   * transcription2, broken into sections by the user to match equivalent sections of transcription1
   */
  splitText2: string[];

  /**
   * Observations and Notes by color, for each row of this DRE.
   * @example
   * [{ [className]: { observations: string, notes: string }, ... }, ...]
   *
   * For className, see StagesApp-Desktop 'highlights' constant main.scss $text-highlights
   *
   * Observations are intended to be entered while comparing texts.
   *
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
  splitTextColorDetails: SplitTextColorDetails;

  /**
   * Array of array of objects.  Each string in splitText1 is here broken into an array of objects of shape:
   * @example
   * { text: string, className: string }
   *
   * Example (except the text will be orthographic):
   * @example
   * { text: 'The story begins like this', className: 'text-highlight-6' }
   *
   * If the text has been highlighted by the user on the Compare Transcriptions tab, className will be set to the highlight number, which corresponds to a color in the desktop app.
   *
   * If the text has not been highlighted, className will be an empty string.
   */
  splitCompareText1: SplitCompareText1;

  /**
   * Array of array of objects.  Each string in splitText2 is here broken into an array of objects of shape:
   * @example
   * { text: string, className: string }
   *
   * Example (except the text will be orthographic):
   * @example
   * { text: 'Here is how the story begins', className: 'text-highlight-6' }
   *
   * If the text has been highlighted by the user on the Compare Transcriptions tab, className will be set to the highlight number, which corresponds to a color in the desktop app.
   *
   * If the text has not been highlighted, className will be an empty string.
   */
  splitCompareText2: string[];

  /**
   * Creates a DRE object
   */
  constructor(data?: DREInterface) {
    super(data);
    const defaults = dreDefaults();

    this._id = data?._id || defaults._id;
    this.fileNumber = data?.fileNumber || defaults.fileNumber;
    const claUnit = data?.claUnit;
    this.claUnit = isNumber(claUnit) ? claUnit : defaults.claUnit;
    this.title = data?.title || defaults.title;
    this.note = data?.note || defaults.note;
    this.activityPlanIds = data?.activityPlanIds || defaults.activityPlanIds;
    this.linkedFiles = data?.linkedFiles || defaults.linkedFiles;
    this.imported = data?.imported || defaults.imported;
    this.readOnly = data?.readOnly || defaults.readOnly;
    this.deferToStage = data?.deferToStage || defaults.deferToStage;
    this.canLinkToTask = data?.canLinkToTask || defaults.canLinkToTask;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;

    this.recording1 = data?.recording1 || defaults.recording1;
    this.recording2 = data?.recording2 || defaults.recording2;
    this.speaker1 = data?.speaker1 || defaults.speaker1;
    this.speaker2 = data?.speaker2 || defaults.speaker2;
    this.transcription1 = data?.transcription1 || defaults.transcription1;
    this.transcription2 = data?.transcription2 || defaults.transcription2;
    this.splitText1 = data?.splitText1 || defaults.splitText1;
    this.splitText2 = data?.splitText2 || defaults.splitText2;
    this.splitTextColorDetails = data?.splitTextColorDetails || defaults.splitTextColorDetails;
    this.splitCompareText1 = data?.splitCompareText1 || defaults.splitCompareText1;
    this.splitCompareText2 = data?.splitCompareText2 || defaults.splitCompareText2;
  }

  /**
   * Creates an updated DRE object
   */
  set(data: Partial<DREInterface>) {
    return new DRE({
      ...this,
      ...data,
    });
  }

}

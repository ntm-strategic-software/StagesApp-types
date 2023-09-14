import { Transcription as TranscriptionInterface, transcriptionDefaults } from '../transcription';

/**
 * Class representing the transcription of a section of a CultureEvent.  A single Transcription may cross GeneralRecording boundaries.
 * Translation and metadata can be associated with the transcription.
 */
export class Transcription implements TranscriptionInterface {

  /**
   * Unique ID for the Transcription
   */
  _id: string;

  /**
   * Optional title the user may give to this Transcription
   */
  title: string;

  /**
   * Array of SearchWord._id's
   */
  searchWords: string[];

  /**
   * Array of strings from Tag.tagText
   */
  tags: string[];

  /**
   * Array of gridItem keys from CultureGrid on Desktop, in the form or row key, hyphen, column key.  Example:  causeEffect–kinship
   */
  gridItems: string[];

  /**
   * The transcribed text.  This is expected to be in the orthography of the target language.
   */
  text: string;

  /**
   * A translation of Transcription.text into the user's language
   */
  translation: string;

  /**
   * Any note the user wants to make about this Transcription
   */
  note: string;

  /**
   * _id of the CultureEvent this Transcription is a part of
   */
  cultureEvent: string;

  /**
   * The order of this Transcription in relation to all other Transcriptions for this CultureEvent
   */
  idx: number;

  /**
   * Starting time of the transcription, in seconds (with decimals), from the beginning of the CultureEvent.
   * If there are multiple GeneralRecordings in the CultureEvent, this is the time from the beginning of the first GeneralRecording.
   */
  transcriptionStartTime: number;

  /**
   * see gh216 in desktop.  Per Bill, we don't need this, but since we were already calculating it, I'm leaving it in
   *  just in case we want to use it later.
   *  Ending time of the transcription, in seconds (with decimals), from the beginning of the CultureEvent.
   *  Currently, this is the ending time of the last loop used when creating/editing the text of transcription.
   */
  transcriptionEndTime: number;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Constructs a Transcription object
   */
  constructor(data?: TranscriptionInterface) {
    const defaults = transcriptionDefaults();
    this._id = data?._id || defaults._id;
    this.title = data?.title || defaults.title;
    this.searchWords = data?.searchWords || defaults.searchWords;
    this.tags = data?.tags || defaults.tags;
    this.gridItems = data?.gridItems || defaults.gridItems;
    this.text = data?.text || defaults.text;
    this.translation = data?.translation || defaults.translation;
    this.note = data?.note || defaults.note;
    this.cultureEvent = data?.cultureEvent || defaults.cultureEvent;
    this.idx = data?.idx || defaults.idx;
    this.transcriptionStartTime = data?.transcriptionStartTime || defaults.transcriptionStartTime;
    this.transcriptionEndTime = data?.transcriptionEndTime || defaults.transcriptionEndTime;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated Transcription object
   */
  set(data: Partial<TranscriptionInterface>) {
    return new Transcription({
      ...this,
      ...data,
    });
  }

}

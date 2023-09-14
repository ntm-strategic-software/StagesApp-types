import { ClaFileType } from '../constants';
import { CultureEvent as CultureEventInterface, cultureEventDefaults } from '../culture-event';
import isNumber from 'lodash/isNumber';
import { CLAFile } from './cla-file';

/**
 * Class representing a Culture Event (our internal term in the software.  In the UI and in Engage, this is called a General Recorder file.)
 *
 * When the user records something with the General Recorder, multiple GeneralRecording objects will be created
 * as the user switches between audio and video modes, or takes pictures while recording is paused.  When the user
 * is done recording, he enters metadata, and saves.
 * At that point one of these CultureEvent objects is created.
 *
 * So a CultureEvent is a creation of the General Recorder, and includes:
 *   - potentially multiple GeneralRecordings
 *   - metadata about the setting, etc.
 *   - the results of the user processing the recording (transcribing, tagging, etc.)
 */
export class CultureEvent extends CLAFile implements CultureEventInterface {

  claFileType(): ClaFileType {
    return this._isPE ? ClaFileType.PE : ClaFileType.CULTURE_EVENT;
  }

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
   * a PE (Practical Expression) is a type of CultureEvent.  Both are created with the General Recorder.
   * But we use _isPE (referenced in claFile.isPE()) to distinguish between PE's and CultureEvents.
   */
  _isPE: boolean;

  /**
   * Unique ID for the Culture Event
   */
  _id: string;

  /**
   * Title of the event
   */
  title: string;

  /**
   * Array of IDs of search words
   */
  searchWords: string[];

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the CultureEvent was initially saved
   */
  date: string;

  /**
   * Array of Person IDs of those who spoke in the generalRecordings of this CultureEvent
   */
  speakers: string[];

  /**
   * Location ID of where the event took place
   */
  location: string;

  /**
   * The audience of the event
   */
  audience: string;

  /**
   * Array of strings from Tag.tagText
   */
  tags: string[];

  /**
   * Array of GeneralRecording Item IDs for all GeneralRecordings that make up this CultureEvent.
   *
   * The General Recorder in the mobile app creates a new GeneralRecording item when the user switches between audio,
   * video, or takes a picture while recording is paused.
   */
  generalRecordings: string[];

  /**
   * What overall CLA unit is this user in?
   */
  claUnit: number;

  /**
   * Event notes
   */
  note: string;

  /**
   * Phonetic Transcription in plain text.  Per Bill, we do not support splitting the phonetic text into sections
   * like we do with the orthographic text.  Phonetic text for a CultureEvent is stored all in one simple string.
   */
  phoneticTranscription: string;

  /**
   * Creates a CultureEvent object
   */
  constructor(data: CultureEventInterface) {
    super(data);
    const defaults = cultureEventDefaults();

    this.fileNumber = data?.fileNumber || defaults.fileNumber;
    this.activityPlanIds = data?.activityPlanIds || defaults.activityPlanIds;
    this.linkedFiles = data?.linkedFiles || defaults.linkedFiles;
    this.imported = data?.imported || defaults.imported;
    this.readOnly = data?.readOnly || defaults.readOnly;
    this.deferToStage = data?.deferToStage || defaults.deferToStage;
    this.canLinkToTask = data?.canLinkToTask || defaults.canLinkToTask;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;

    this._isPE = data?._isPE || defaults._isPE;
    this._id = data?._id || defaults._id;
    this.title = data?.title || defaults.title;
    this.searchWords = data?.searchWords || defaults.searchWords;
    this.date = data?.date || defaults.date;
    this.speakers = data?.speakers || defaults.speakers;
    this.location = data?.location || defaults.location;
    this.audience = data?.audience || defaults.audience;
    this.tags = data?.tags || defaults.tags;
    this.generalRecordings = data?.generalRecordings || defaults.generalRecordings;
    const claUnit = data?.claUnit;
    this.claUnit = isNumber(claUnit) ? claUnit : defaults.claUnit;
    this.note = data?.note || defaults.note;
    this.phoneticTranscription = data?.phoneticTranscription || defaults.phoneticTranscription;
  }

  /**
   * Creates an updated CultureEvent object
   */
  set(data: Partial<CultureEventInterface>) {
    return new CultureEvent({
      ...this,
      ...data,
    });
  }

}

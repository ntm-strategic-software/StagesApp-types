import { Marker as MarkerInterface, markerDefaults } from '../marker';

/**
 * Class representing a point in time in a GeneralRecording, with metadata that applies to the audio/video beginning at that point.
 *
 * The code is commented out for full Marker support, but we can add it in again whenever we want.  The current use is
 * just to mark the beginning of a GeneralRecording.  Markers are displayed visually, and clicking one jumps to that point in the recording.
 */
export class Marker implements MarkerInterface {

  /**
   * Unique ID for the marker
   */
  _id: string;

  /**
   * ID of the CultureEvent that the GeneralRecording belongs to, that this Marker is in (see GeneralRecording.markers)
   */
  cultureEvent: string;

  /**
   * The time (in seconds with decimals) from the beginning of the GeneralRecording, where the marker is
   */
  startTime: number;

  /**
   * Note that pertains to the part of the audio/video in the GeneralRecording that begins at startTime
   */
  note: string;

  /**
   * Array of IDs of search words that pertain to the part of the audio/video in the GeneralRecording that begins at startTime
   */
  searchWords: string[];

  /**
   * Creates a Marker object
   */
  constructor(data?: MarkerInterface) {
    const defaults = markerDefaults();
    this._id = data?._id || defaults._id;
    this.cultureEvent = data?.cultureEvent || defaults.cultureEvent;
    this.startTime = data?.startTime || defaults.startTime;
    this.note = data?.note || defaults.note;
    this.searchWords = data?.searchWords || defaults.searchWords;
  }

  /**
   * Creates an updated Marker object
   */
  set(data: Partial<MarkerInterface>) {
    return new Marker({
      ...this,
      ...data,
    });
  }

}

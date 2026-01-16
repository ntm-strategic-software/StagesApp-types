/**
 * Represents a point in time in a GeneralRecording, with metadata that applies to the audio/video beginning at that point.
 *
 * The code is commented out for full Marker support, but we can add it in again whenever we want. The current use is
 * just to mark the beginning of a GeneralRecording. Markers are displayed visually, and clicking one jumps to that point in the recording.
 */
export interface Marker {
  /** Unique ID for the marker */
  _id: string
  /** ID of the CultureEvent that the GeneralRecording belongs to, that this Marker is in (see GeneralRecording.markers) */
  cultureEvent: string
  /** The time (in seconds with decimals) from the beginning of the GeneralRecording, where the marker is */
  startTime: number
  /** Note that pertains to the part of the audio/video in the GeneralRecording that begins at startTime */
  note: string
  /** Array of IDs of search words that pertain to the part of the audio/video in the GeneralRecording that begins at startTime */
  searchWords: string[],
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewMarker is Marker with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewMarker extends Omit<Marker, 'createdAt' | 'updatedAt'> {
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

/** Returns a new Marker object with default values */
export const markerDefaults = (): Marker => ({
    _id: '',
    cultureEvent: '',
    startTime: 0,
    note: '',
    searchWords: [],
    createdAt: '',
    updatedAt: '',
});

/** Interface defining helper methods for Marker */
export interface MarkerHelper {
  set(item: Marker, data: Partial<Marker>): Marker
}
/** Object with helper methods for Marker */
export const markerHelper: MarkerHelper = {
  /** Creates an updated Marker object by merging an existing Marker object with new values */
  set(item: Marker, data: Partial<Marker>): Marker {
    return {
      ...item,
      ...data,
    };
  },
};

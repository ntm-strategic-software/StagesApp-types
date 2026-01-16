/**
 * Represents a StagesApp location.  We prefix with 'SA' (for Stages App) to distinguish it
 * from the `Location` global object in browsers and Electron.
 */
export interface SALocation {
  /** Unique ID for the location */
  _id: string
  /** Name of the location */
  name: string
  /** Any notes about the location */
  note: string
  /** ISO date string (e.g., '2022-06-20T15:50:40.055Z'), when user on Mobile last edited this location or added this location to a CultureEvent */
  dateLastUsedOnMobile: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewSALocation is SALocation with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewSALocation extends Omit<SALocation, 'createdAt' | 'updatedAt'> {
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

/** Returns a new SALocation object with default values */
export const saLocationDefaults = (): SALocation => ({
  _id: '',
  name: '',
  note: '',
  dateLastUsedOnMobile: '',
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for SALocation */
export interface SALocationHelper {
  set(loc: SALocation, data: Partial<SALocation>): SALocation
}
/** Object with helper methods for SALocation */
export const saLocationHelper = {
  /** Creates an updated SALocation object by merging an existing SALocation object with new values */
  set(loc: SALocation, data: Partial<SALocation>): SALocation {
    return {
      ...loc,
      ...data,
    };
  },
};

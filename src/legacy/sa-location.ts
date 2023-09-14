import { SALocation as SALocationInterface, saLocationDefaults } from '../sa-location';

/**
 * Class representing a StagesApp location (not to be confused with the `Location` global object in browsers and Electron)
 */
export class SALocation implements SALocationInterface {

  /**
   * Unique ID for the location
   */
  _id: string;

  /**
   * Name of the location
   */
  name: string;

  /**
   * Any notes about the location
   */
  note: string;

  /**
   * ISO date string (e.g., '2022-06-20T15:50:40.055Z'), when user on Mobile last edited this location or added this location to a CultureEvent
   */
  dateLastUsedOnMobile: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Creates an SALocation object
   */
  constructor(data?: SALocationInterface) {
    const defaults = saLocationDefaults();
    this._id = data?._id || defaults._id;
    this.name = data?.name || defaults.name;
    this.note = data?.note || defaults.note;
    this.dateLastUsedOnMobile = data?.dateLastUsedOnMobile || defaults.dateLastUsedOnMobile;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated SALocation object
   */
  set(data: Partial<SALocationInterface>) {
    return new SALocation({
      ...this,
      ...data,
    });
  }

}

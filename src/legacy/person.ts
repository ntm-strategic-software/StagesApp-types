import { Person as PersonInterface, personDefaults } from '../person';

/**
 * Class representing a Person.  This has no connection to the Users table.
 */
export class Person implements PersonInterface {

  /**
   * Unique ID for a person
   */
  _id: string;

  /**
   * Person's common name
   */
  name: string;

  /**
   * Person's full name
   */
  fullName: string;

  /**
   * Description of the person
   */
  description: string;

  /**
   * Person's birthday in format MM/DD
   */
  birthday: string;

  /**
   * Person's sex
   */
  sex: string;

  /**
   * Note about the person
   */
  note: string;

  /**
   * ISO date (e.g., '2022-06-20T15:50:40.055Z'), when user on Mobile last edited this person or added this person to a CultureEvent
   */
  dateLastUsedOnMobile: string;

  /**
   * True if the person is dead
   */
  deceased: boolean;

  /**
   * Filename of a picture of the person (no path, but does include extension)
   */
  photoFilename: string;

  /**
   * Creates a Person object
   * @param {Person|Object} data
   */
  constructor(data?: PersonInterface) {
    const defaults = personDefaults();
    this._id = data?._id || defaults._id;
    this.name = data?.name || defaults.name;
    this.fullName = data?.fullName || defaults.fullName;
    this.description = data?.description || defaults.description;
    this.birthday = data?.birthday || defaults.birthday;
    this.sex = data?.sex || defaults.sex;
    this.note = data?.note || defaults.note;
    this.dateLastUsedOnMobile = data?.dateLastUsedOnMobile || defaults.dateLastUsedOnMobile;
    this.deceased = data?.deceased || defaults.deceased;
    this.photoFilename = data?.photoFilename || defaults.photoFilename;
  }

  /**
   * Creates an updated Person object
   */
  set(data: Partial<PersonInterface>) {
    return new Person({
      ...this,
      ...data,
    });
  }

}

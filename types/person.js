/**
 * Class representing a Person.  This has no connection to the Users table.
 */
class Person {

  /**
   * Unique ID for a person
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Person's common name
   * @type {string}
   * @default ''
   */
  name = '';

  /**
   * Person's full name
   * @type {string}
   * @default ''
   */
  fullName = '';

  /**
   * Description of the person
   * @type {string}
   * @default ''
   */
  description = '';

  /**
   * Person's birthday in format MM/DD
   * @type {string}
   * @default ''
   */
  birthday = '';

  /**
   * Person's sex
   * @type {string}
   * @default ''
   */
  sex = '';

  /**
   * Note about the person
   * @type {string}
   * @default ''
   */
  note = '';

  /**
   * ISO date (e.g., '2022-06-20T15:50:40.055Z'), when user on Mobile last edited this person or added this person to a CultureEvent
   * @type {string}
   * @default ''
   */
  dateLastUsedOnMobile = '';

  /**
   * True if the person is dead
   * @type {boolean}
   * @default ''
   */
  deceased = false;

  /**
   * Filename of a picture of the person (no path, but does include extension)
   * @type {string}
   * @default ''
   */
  photoFilename = '';

  /**
   * Creates a Person object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Person object
   * @param {Object} data
   * @returns {Person}
   */
  set(data) {
    return new Person({
      ...this,
      ...data,
    });
  }

}

module.exports = Person;

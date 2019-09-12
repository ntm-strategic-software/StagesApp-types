import { PersonSex } from './constants';

/**
 * Class representing a Person
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
   * IDs of person's home locations
   * @type {Array}
   * @default []
   */
  homeLocationIds = [];

  /**
   * Person's birthday in format MM/DD
   * @type {string}
   * @default ''
   */
  birthday = '';

  /**
   * Person's spouses, separated by commas
   * @type {string}
   * @default ''
   */
  spouses = '';

  /**
   * Person's sex
   * @type {PersonSex}
   * @default PersonSex.MALE
   */
  sex = PersonSex.MALE;

  /**
   * Note about the person
   * @type {string}
   * @default ''
   */
  note = '';

  /**
   * ISO date of last event involving person
   * @type {string}
   * @default ''
   */
  lastUsed = '';

  /**
   * ISO date of person's death
   * @type {string}
   * @default ''
   */
  dateDeceased = '';

  /**
   * Filename of a picture of the person
   * @type {string}
   * @default ''
   */
  photoFilename = '';

  /**
   * Creates an person Object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated person Object
   * @param {Object} data
   * @returns {OutlineItem}
   */
  set(data) {
    return new Person({
      ...this,
      ...data
    });
  }

}

module.exports = Person;

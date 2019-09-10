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
   * Other names the person goes by, separated by commas
   * @type {string}
   * @default ''
   */
  otherNames = '';

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
   * Person's children, separated by commas
   * @type {string}
   * @default ''
   */
  children = '';

  /**
   * Person's mother
   * @type {string}
   * @default ''
   */
  mother = '';

  /**
   * Person's father
   * @type {string}
   * @default ''
   */
  father = '';


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
   * Group that the person is in (clan, caste, or anything other group worth recording)
   * @type {string}
   * @default ''
   */
  group = '';

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

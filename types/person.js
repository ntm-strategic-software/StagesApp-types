const { Sex } = require('./constants');

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
   * Person's birthday in format MM/DD
   * @type {string}
   * @default ''
   */
  birthday = '';

  /**
   * Person's sex
   * @type {Sex}
   * @default Sex.MALE
   */
  sex = Sex.MALE;

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
  dateLastUsed = '';

  /**
   * True if the person is deceased
   * @type {boolean}
   * @default ''
   */
  deceased = false;

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
   * @returns {Person}
   */
  set(data) {
    return new Person({
      ...this,
      ...data
    });
  }

}

module.exports = Person;

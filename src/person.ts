/**
 * Represents a Person. This has no connection to the Users table.
 */
export interface Person {
  /** Unique ID for a person */
  _id: string
  /** Person's common name */
  name: string
  /** Person's full name */
  fullName: string
  /** Person's birthday in format MM/DD */
  birthday: string
  /** Person's sex */
  sex: string
  /** Note about the person */
  note: string
  /** ISO date (e.g., '2022-06-20T15:50:40.055Z'), when user on Mobile last edited this person or added this person to a CultureEvent */
  dateLastUsedOnMobile: string
  /** True if the person is dead */
  deceased: boolean
  /** Filename of a picture of the person (no path, but does include extension) */
  photoFilename: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewPerson is Person with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewPerson extends Omit<Person, 'createdAt' | 'updatedAt'> {
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

/** Returns a new Person object with default values */
export const personDefaults = (): Person => ({
  _id: '',
  name: '',
  fullName: '',
  birthday: '',
  sex: '',
  note: '',
  dateLastUsedOnMobile: '',
  deceased: false,
  photoFilename: '',
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for Person */
export interface PersonHelper {
  set(person: Person, data: Partial<Person>): Person
}
/** Object with helper methods for Person */
export const personHelper = {
  /** Creates an updated Person object by merging an existing Person object with new values */
  set(person: Person, data: Partial<Person>): Person {
    return {
      ...person,
      ...data,
    };
  },
};

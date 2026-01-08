export interface Person {
  _id: string
  name: string
  fullName: string
  birthday: string
  sex: string
  note: string
  dateLastUsedOnMobile: string
  deceased: boolean
  photoFilename: string
  createdAt: string
  updatedAt: string
}

export interface NewPerson extends Omit<Person, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

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

export interface PersonHelper {
  set(person: Person, data: Partial<Person>): Person
}
export const personHelper = {
  /**
   * Creates an updated Person object
   */
  set(person: Person, data: Partial<Person>): Person {
    return {
      ...person,
      ...data,
    };
  },
};

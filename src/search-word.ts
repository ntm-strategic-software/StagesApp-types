/**
 * Represents a search word, which is a word or phrase the user enters and links to something they want to find
 * by using that word or phrase
 */
export interface SearchWord {
  /** Unique ID for the search word */
  _id: string
  /** Text of the search word */
  word: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewSearchWord is SearchWord with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewSearchWord extends Omit<SearchWord, 'createdAt' | 'updatedAt'> {
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

/** Returns a new SearchWord object with default values */
export const searchWordDefaults = (): SearchWord => ({
  _id: '',
  word: '',
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for SearchWord */
export interface SearchWordHelper {
  set(word: SearchWord, data: Partial<SearchWord>): SearchWord
}
/** Object with helper methods for SearchWord */
export const searchWordHelper = {
  /** Creates an updated SearchWord object by merging an existing SearchWord object with new values */
  set(word: SearchWord, data: Partial<SearchWord>): SearchWord {
    return {
      ...word,
      ...data,
    };
  },
};

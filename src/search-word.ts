export interface SearchWord {
  _id: string
  word: string
  createdAt: string
  updatedAt: string
}

export interface NewSearchWord extends Omit<SearchWord, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

export const searchWordDefaults = (): SearchWord => ({
  _id: '',
  word: '',
  createdAt: '',
  updatedAt: '',
});

export interface SearchWordHelper {
  set(word: SearchWord, data: Partial<SearchWord>): SearchWord
}
export const searchWordHelper = {
  /**
   * Creates an updated SearchWord object
   */
  set(word: SearchWord, data: Partial<SearchWord>): SearchWord {
    return {
      ...word,
      ...data,
    };
  },
};

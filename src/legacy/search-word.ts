import { SearchWord as SearchWordInterface, searchWordDefaults } from '../search-word';

/**
 * Class representing a search word, which is a word or phrase the user enters and links to something they want to find
 * by using that word or phrase
 */
export class SearchWord implements SearchWordInterface {

  /**
   * Unique ID for the search word
   */
  _id: string;

  /**
   * Text of the search word
   */
  word: string;

  /**
   * Creates a SearchWord object
   */
  constructor(data?: SearchWordInterface) {
    const defaults = searchWordDefaults();
    this._id = data?._id || defaults._id;
    this.word = data?.word || defaults.word;
  }

  /**
   * Creates an updated SearchWord object
   */
  set(data: Partial<SearchWordInterface>) {
    return new SearchWord({
      ...this,
      ...data,
    });
  }

}

class ListeningCollectionItem {

  /**
   * ID of the item; matches a CE's ID
   * @type {string}
   */
  _id = '';

  /**
   * ISO dates of when listened to previously
   * @type {[string]}
   */
  listenedToPrev = [];

  /**
   * Play order
   * @type {number}
   */
  order = 0;

  /**
   * Title of the item; matches a CE's title
   * @type {string}
   */
  title = '';

  /**
   * Creates a Listening Collection Item Object
   * @param {{_id: string, listenedToPrev: [string], order: number, title: string}} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Listening Collection Item Object
   * @param {{_id: string, listenedToPrev: [string], order: number, title: string}} data
   * @returns {ListeningCollectionItem}
   */
  set(data) {
    return new ListeningCollectionItem({
      ...this,
      ...data
    });
  }

}

module.exports = ListeningCollectionItem;

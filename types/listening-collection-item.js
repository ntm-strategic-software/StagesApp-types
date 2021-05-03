class ListeningCollectionItem {

  /**
   * ID of the item; matches a CE's ID
   * @type {string}
   */
  _id = '';

  /**
   * ISO dates of when listened to previously
   * @type {string[]}
   */
  listenedToPrev = [];

  /**
   * Play order
   * @type {number}
   */
  order = 0;

  /**
   * Audio recording file names
   * @type {string[]}
   */
  recordingsAudio = [];

  /**
   * Video recording file names
   * @type {string[]}
   */
  recordingsVideo = [];

  /**
   * Order of recordings by file name
   * @type {string[]}
   */
  recordingsOrder = [];

  /**
   * Title of the item; matches a CE's title
   * @type {string}
   */
  title = '';

  /**
   * User ID
   * @type {string}
   */
  user = '';

  /**
   * ISO date string
   * @type {string}
   */
  dateRecorded = '';

  /**
   * Creates a Listening Collection Item Object
   * @param {{_id: string, listenedToPrev: string[], order: number, recordingsAudio: string[], recordingsVideo: string[], recordingsOrder: string[], title: string, user: string, dateRecorded: string}} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated Listening Collection Item Object
   * @param {{_id: string, listenedToPrev: string[], order: number, recordingsAudio: string[], recordingsVideo: string[], recordingsOrder: string[], title: string, user: string, dateRecorded: string}} data
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

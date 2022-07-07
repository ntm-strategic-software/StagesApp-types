/**
 * Class representing an item of type PendingFileType.  This is a file created on Mobile but not through a Task, so the file is not linked to an ActivityPlan.
 * I.e., a quick photo, a voice note, or a CE or DRE created by the user going straight to the recorder instead of through a Task.
 */
class PendingMedia {
  /**
   * Unique ID for the PendingMedia
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Type of Pending Media
   * @type {PendingFileType|string}
   * @default ''
   */
  fileType = '';

  /**
   * Title of the PendingMedia file.  Empty string for CEs and DREs:  we get their titles from the CE or DRE record itself.
   * @type {string}
   * @default ''
   */
  title = '';

  /**
   * Filename of this Pending Media (no path, but does include extension).  Empty string for CEs and DREs.
   * @type {string}
   * @default ''
   */
  filename = '';

  /**
   * Constructs an PendingMedia object
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated PendingMedia object
   * @param {Object} data
   * @returns {PendingMedia}
   */
  set(data) {
    return new PendingMedia({
      ...this,
      ...data,
    });
  }

}

module.exports = PendingMedia;

/**
 * Class representing a Quick Voice Note.  This audio file is recorded on Mobile using the Quick Voice Note recorder.
 */
class VoiceNote {
  /**
   * Unique ID for the VoiceNote.
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Title of the VoiceNote file.
   * @type {string}
   * @default ''
   */
  title = '';

  /**
   * Filename of this Voice Note (no path, but does include extension).
   * @type {string}
   * @default ''
   */
  filename = '';

  /**
   * True if the user has archived this Voice Note.
   * @type {boolean}
   */
  isArchived = false;

  /**
   * Constructs an VoiceNote object
   * @param {VoiceNote|Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated VoiceNote object
   * @param {VoiceNote|Object} data
   * @returns {VoiceNote}
   */
  set(data) {
    return new VoiceNote({
      ...this,
      ...data,
    });
  }

}

module.exports = VoiceNote;

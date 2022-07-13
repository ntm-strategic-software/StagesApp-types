const { ClaFileType } = require('./constants');

/**
 * Class representing a CLA File.  This class is only used as a base class (super class).
 */
class CLAFile {
  /**
   * The type of CLA File this is (e.g., CultureEvent, DRE)
   * This method must be overridden in any class that extends CLAFile
   */
  claFileType() {}

  /**
   * file number
   * @type {number}
   */
  fileNumber = 0;

  /**
   * Array of file numbers (not _id's)
   * @type {string[]}
   * @default []
   */
  linkedFiles = [];

  /**
   * true if the file was imported from a previous export
   * @type {boolean}
   */
  imported = false;

  /**
   * true if we should prevent editing the file
   * @type {boolean}
   */
  readOnly = false;

  /**
   * constructs a CLAFile instance
   * @param {CLAFile|Object} data
   * @param {number} data.fileNumber
   * @param {boolean} data.imported
   * @param {boolean} data.readOnly
   * @param {string[]} data.linkedFiles
   */
  constructor(data) {
    this.fileNumber = data.fileNumber || this.fileNumber;
    this.imported = data.imported || this.imported;
    this.readOnly = data.readOnly || this.readOnly;
    this.linkedFiles = data.linkedFiles || this.linkedFiles;
  }

  /**
   * returns true if this CLAFile is a CultureEvent
   * @returns {boolean}
   */
  isCE() {
    return this.claFileType() === ClaFileType.CultureEvent;
  }

  /**
   * returns true if this CLAFile is a DRE
   * @returns {boolean}
   */
  isDRE() {
    return this.claFileType() === ClaFileType.DRE;
  }
}

module.exports = CLAFile;

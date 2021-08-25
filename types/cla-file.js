/**
 * Class representing a CLA File
 */
class CLAFile {

  /**
   * file number
   * @type {number}
   */
  fileNumber = 0;

  /**
   * for if the file was imported from a previous export
   * @type {boolean}
   */
  imported = false;

  /**
   * for if the file is read only
   * @type {boolean}
   */
  readOnly = false;

  /**
   * constructs a CLAFile instance
   * @param {Object} data
   * @param {number} data.fileNumber
   * @param {boolean} data.imported
   * @param {boolean} data.readOnly
   */
  constructor(data) {
    this.fileNumber = data.fileNumber || this.fileNumber;
    this.imported = data.imported || this.imported;
    this.readOnly = data.readOnly || this.readOnly;
  }

}

module.exports = CLAFile;

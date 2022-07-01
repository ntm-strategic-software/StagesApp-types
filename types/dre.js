const CLAFile = require('./cla-file');
const { ClaFileType } = require('./constants');

/**
 * Class representing a Dual Recorder Event (our internal name.  In the UI and Engage, a Dual Recorder file.)
 *
 * The user records a native, then records himself telling the same story.  The desktop Stages app has tools
 * to enable the user to transcribe and compare the two texts, to aid in higher-level language learning.
 *
 * @extends CLAFile
 */
class DRE extends CLAFile {
  claFileType() {
    return ClaFileType.DRE;
  }

  /**
   * Unique ID for the DRE
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * Title of the DRE
   * @type {string}
   * @default ''
   */
  title = '';

  /**
   * Recording 1 file name (no path, but does include the extension)
   * @type {string}
   */
  recording1 = '';

  /**
   * Recording 2 file name (no path, but does include the extension)
   * @type {string}
   */
  recording2 = '';

  /**
   * Transcription 1 plain text
   * @type {string}
   */
  transcription1 = '';

  /**
   * Transcription 2 plain text
   * @type {string}
   */
  transcription2 = '';

  /**
   * transcription1, broken into sections by the user to match equivalent sections of transcription2
   * @type {string[]}
   */
  splitText1 = [];

  /**
   * transcription2, broken into sections by the user to match equivalent sections of transcription1
   * @type {string[]}
   */
  splitText2 = [];

  /**
   * Observations and Notes by color, for each row of this DRE.
   * [{ [className]: { observations: string, notes: string }, ... }, ...]
   * For className, see StagesApp-Desktop 'highlights' constant main.scss $text-highlights
   *
   * Example where the DRE text has been aligned into 4 rows (splitText1 and splitText2 have lengths of 4),
   * and the second and third rows have some highlighting:
   * [ {},
   *   { 'text-highlight-7': { observations: 'I used the full name, he used a pronoun. Why?', notes: '' }, { 'text-highlight-3': { observations: '', notes: '' } },
   *   { 'text-highlight-3': { observations: 'why did he add -em?', notes: 'I think this may be a word-level grammar issue' } },
   *   {},
   * ]
   */
  splitTextColorDetails = [];

  /**
   * Array of array of objects.  Each string in splitText1 is here broken into an array of objects of shape:
   * { text: string, className: string }
   * Example (except the text will be orthographic):  { text: 'The story begins like this', className: 'text-highlight-6' }
   *
   * If the text has been highlighted by the user on the Compare Transcriptions tab, className will be set to the highlight number, which corresponds to a color in the desktop app.
   * If the text has not been highlighted, className will be an empty string.
   *
   * @type {object[][]}
   */
  splitCompareText1 = [];

  /**
   * Array of array of objects.  Each string in splitText2 is here broken into an array of objects of shape:
   * { text: string, className: string }
   * Example (except the text will be orthographic):  { text: 'Here is how the story begins', className: 'text-highlight-6' }
   *
   * If the text has been highlighted by the user on the Compare Transcriptions tab, className will be set to the highlight number, which corresponds to a color in the desktop app.
   * If the text has not been highlighted, className will be an empty string.
   *
   * @type {string[]}
   */
  splitCompareText2 = [];

  /**
   * Creates a DRE object
   * @param {Object} data
   */
  constructor(data = {}) {
    super(data);
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated DRE object
   * @param {Object} data
   * @returns {DRE}
   */
  set(data = {}) {
    return new DRE({
      ...this,
      ...data,
    });
  }
}

module.exports = DRE;

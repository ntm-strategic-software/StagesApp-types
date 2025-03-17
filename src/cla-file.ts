import { ClaFileType } from './constants';

export interface CLAFile {
  _id: string
  fileNumber: number
  claUnit: number
  title: string
  note: string
  activityPlanIds: string[]
  linkedFiles: string[]
  imported: boolean
  readOnly: boolean
  deferToStage: number
  canLinkToTask: boolean
  createdAt?: string
  updatedAt?: string
}
export const claFileDefaults = (): CLAFile => ({
  _id: '',
  fileNumber: 0,
  claUnit: 1,
  title: '',
  note: '',
  activityPlanIds: [],
  linkedFiles: [],
  imported: false,
  readOnly: false,
  deferToStage: 0,
  canLinkToTask: false,
  createdAt: '',
  updatedAt: '',
});

export interface ClaFileHelper {
  claFileType(claFile: CLAFile): ClaFileType;
  isCE(claFile: CLAFile): boolean;
  isDRE(claFile: CLAFile): boolean;
  isPE(claFile: CLAFile): boolean;
  isSimpleDRE(claFile: CLAFile): boolean;
  set(claFile: CLAFile, data: Partial<CLAFile>): CLAFile;
}
export const claFileHelper: ClaFileHelper = {
  /**
   * returns the ClaFileType of this CLAFile
   */
  claFileType: (claFile: CLAFile): ClaFileType => {
    // Check for DRE-specific properties first
    if ('recording1' in claFile && 'recording2' in claFile) {
      // If it has _isSimple property and it's true, it's a SimpleDRE
      if ('_isSimple' in claFile && (claFile as any)._isSimple) {
        return ClaFileType.SIMPLE_DRE;
      }

      return ClaFileType.DRE;
    } else {
      // If it has _isPE property and it's true, it's a PE
      if ('_isPE' in claFile && (claFile as any)._isPE) {
        return ClaFileType.PE;
      }

      return ClaFileType.CULTURE_EVENT;
    }
  },

  /**
   * returns true if this CLAFile is a CultureEvent
   */
  isCE(claFile: CLAFile): boolean {
    return this.claFileType(claFile) === ClaFileType.CULTURE_EVENT;
  },

  /**
   * returns true if this CLAFile is a DRE
   */
  isDRE(claFile: CLAFile): boolean {
    return this.claFileType(claFile) === ClaFileType.DRE;
  },

  /**
   * returns true if this CLAFile is a PE
   */
  isPE(claFile: CLAFile): boolean {
    return this.claFileType(claFile) === ClaFileType.PE;
  },

  /**
   * returns true if this CLAFile is a Simple DRE
   */
  isSimpleDRE(claFile: CLAFile): boolean {
    return this.claFileType(claFile) === ClaFileType.SIMPLE_DRE;
  },

  /**
   * Creates an updated CLAFile object
   */
  set(claFile: CLAFile, data: Partial<CLAFile>): CLAFile {
    return {
      ...claFile,
      ...data,
    };
  },
};

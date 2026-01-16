import { ClaFileType } from './constants';

/**
 * Represents a CLA File object.
 * This interface is only used as a base type that specific CLAFile types extend.
 */
export interface CLAFile {
  /** Unique identifier for the CLAFile */
  _id: string
  /** Number assigned to the file.  Like _id, fileNumber is unique within a user's database on a given Stages Desktop installation */
  fileNumber: number
  /** What overall 1-based CLA unit was this user in when this CLA File was created? */
  claUnit: number
  /** Title the user gives this CLA File */
  title: string
  /**
   * Any notes the user wants to make about the CLAFile.
   * For a DRE, that might be about the topic or genre or the helper used, the situation, etc.
   */
  note: string
  /**
   * _id's of the ActivityPlans this CLAFile is linked to.  If empty array, this CLA File was created without an ActivityPlan.
   *
   *  _id's are appended to the end of the list when this CLA File is linked to an ActivityPlan.
   *  So, the first ActivityPlan in the list is the one this CLA File was created through
   *  (or first linked to, if not created through an ActivityPlan),
   *  unless the user explicitly disassociated the original CLA File from that original ActivityPlan.
   *
   * Each ActivityPlan's mainClaFileId or promptClaFileId will be this CLAFile's _id.
   * To find the task linked to this CLAFile in a specific ActivityPlan:
   * - Determine whether this CLAFile is the mainClaFileId or promptClaFileId for that ActivityPlan
   * - Then, find that ActivityPlan's task that has the appropriate recorderButtonType.
   */
  activityPlanIds: string[]
  /**
   * fileNumbers (not _id's) of other CLAFiles that are linked to this CLAFile.
   * Each CLAFile in this list will have this CLAFile's fileNumber in its linkedFiles list too.
   */
  linkedFiles: string[]
  /** True if the file was imported from a Stages export. */
  imported: boolean
  /** True if we should prevent editing the CLAFile. */
  readOnly: boolean
  /** deferToStage is not used.
   * 7/2/25 Bill said wait to see if anyone asks for this feature, so we halted implementing it.
   */
  deferToStage: number
  /** True if this CLAFile can be linked to tasks in ActivityPlans. */
  canLinkToTask: boolean
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewCLAFile is CLAFile with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewCLAFile extends Omit<CLAFile, 'createdAt' | 'updatedAt'> {
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database.
   * If not provided, it should be set when the row is created in the database.
   */
  createdAt?: string
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database.
   * If not provided, it should be set when the row is updated in the database.
   */
  updatedAt?: string
}

/** Returns a new CLAFile object with default values */
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

/** Interface defining helper methods for CLAFile */
export interface ClaFileHelper {
  claFileType(claFile: CLAFile): ClaFileType;
  isCE(claFile: CLAFile): boolean;
  isDRE(claFile: CLAFile): boolean;
  isPE(claFile: CLAFile): boolean;
  isSimpleDRE(claFile: CLAFile): boolean;
  isAnyCE(claFile: CLAFile): boolean;
  isAnyDRE(claFile: CLAFile): boolean;
  set(claFile: CLAFile, data: Partial<CLAFile>): CLAFile;
}
/** Object with helper methods for CLAFile */
export const claFileHelper: ClaFileHelper = {
  /** returns the ClaFileType of this CLAFile */
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

  /** returns true if this CLAFile is a CultureEvent or a PE */
  isAnyCE(claFile: CLAFile): boolean {
    return [ClaFileType.CULTURE_EVENT, ClaFileType.PE].includes(this.claFileType(claFile));
  },

  /** returns true if this CLAFile is a DRE or a SimpleDRE */
  isAnyDRE(claFile: CLAFile): boolean {
    return [ClaFileType.DRE, ClaFileType.SIMPLE_DRE].includes(this.claFileType(claFile));
  },

  /** returns true if this CLAFile is a CultureEvent (not a PE) */
  isCE(claFile: CLAFile): boolean {
    return this.claFileType(claFile) === ClaFileType.CULTURE_EVENT;
  },

  /** returns true if this CLAFile is a DRE (not a SimpleDRE) */
  isDRE(claFile: CLAFile): boolean {
    return this.claFileType(claFile) === ClaFileType.DRE;
  },

  /** returns true if this CLAFile is a PE */
  isPE(claFile: CLAFile): boolean {
    return this.claFileType(claFile) === ClaFileType.PE;
  },

  /** returns true if this CLAFile is a Simple DRE */
  isSimpleDRE(claFile: CLAFile): boolean {
    return this.claFileType(claFile) === ClaFileType.SIMPLE_DRE;
  },

  /** Creates an updated CLAFile object by merging an existing CLAFile with new values */
  set(claFile: CLAFile, data: Partial<CLAFile>): CLAFile {
    return {
      ...claFile,
      ...data,
    };
  },
};

export interface QuickNote {
  _id: string
  filename: string
  quickText: string
  isArchived: boolean
  createdAt: string
  updatedAt: string
}

export interface NewQuickNote extends Omit<QuickNote, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

export const quickNoteDefaults = () => ({
  _id: '',
  filename: '',
  quickText: '',
  isArchived: false,
  createdAt: '',
  updatedAt: '',
});

export interface QuickNoteHelper {
  set(quickNote: QuickNote, data: Partial<QuickNote>): QuickNote
}
export const quickNoteHelper = {
  /**
   * Creates an updated QuickNote object
   */
  set(quickNote: QuickNote, data: Partial<QuickNote>): QuickNote {
    return {
      ...quickNote,
      ...data,
    };
  },
};

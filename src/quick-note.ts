export interface QuickNote {
  _id: string
  filename: string
  quickText: string
  isArchived: boolean
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

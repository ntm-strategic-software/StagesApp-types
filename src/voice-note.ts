export interface VoiceNote {
  _id: string
  title: string
  filename: string
  isArchived: boolean
  createdAt?: string
  updatedAt?: string
}
export const voiceNoteDefaults = () => ({
  _id: '',
  title: '',
  filename: '',
  isArchived: false,
  createdAt: '',
  updatedAt: '',
});

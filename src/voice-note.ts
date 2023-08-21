export interface VoiceNote {
  _id: string
  title: string
  filename: string
  isArchived: boolean
}
export const voiceNoteDefaults = () => ({
  _id: '',
  title: '',
  filename: '',
  isArchived: false,
});

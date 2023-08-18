export interface PlaylistItem {
  _id: string
  listenedToPrev: string[]
  order: number
  recordingsAudio: string[]
  recordingsVideo: string[]
  recordingsOrder: string[]
  title: string
  dateRecorded: string
}
export const playlistItemDefaults = (): PlaylistItem => ({
  _id: '',
  listenedToPrev: [],
  order: 0,
  recordingsAudio: [],
  recordingsVideo: [],
  recordingsOrder: [],
  title: '',
  dateRecorded: '',
});

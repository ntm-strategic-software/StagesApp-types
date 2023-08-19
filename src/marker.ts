export interface Marker {
  _id: string
  cultureEvent: string
  startTime: number
  note: string
  searchWords: string[],
}
export const markerDefaults = (): Marker => ({
    _id: '',
    cultureEvent: '',
    startTime: 0,
    note: '',
    searchWords: [],
});

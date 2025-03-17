export interface Marker {
  _id: string
  cultureEvent: string
  startTime: number
  note: string
  searchWords: string[],
  createdAt?: string
  updatedAt?: string
}
export const markerDefaults = (): Marker => ({
    _id: '',
    cultureEvent: '',
    startTime: 0,
    note: '',
    searchWords: [],
    createdAt: '',
    updatedAt: '',
});

export interface MarkerHelper {
  set(item: Marker, data: Partial<Marker>): Marker
}
export const markerHelper = {
  /**
   * Creates an updated Marker object
   */
  set(item: Marker, data: Partial<Marker>): Marker {
    return {
      ...item,
      ...data,
    };
  },
};

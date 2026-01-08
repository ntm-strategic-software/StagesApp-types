export interface Transcription {
  _id: string
  title: string
  searchWords: string[]
  tags: string[]
  gridItems: string[]
  text: string
  translation: string
  note: string
  cultureEvent: string
  idx: number
  transcriptionStartTime: number
  transcriptionEndTime: number
  createdAt: string
  updatedAt: string
}

export interface NewTranscription extends Omit<Transcription, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

export const transcriptionDefaults = (): Transcription => ({
  _id: '',
  title: '',
  searchWords: [],
  tags: [],
  gridItems: [],
  text: '',
  translation: '',
  note: '',
  cultureEvent: '',
  idx: 0,
  transcriptionStartTime: 0,
  transcriptionEndTime: 0,
  createdAt: '',
  updatedAt: '',
});

export interface TranscriptionHelper {
  set(item: Transcription, data: Partial<Transcription>): Transcription
}
export const transcriptionHelper = {
  /**
   * Creates an updated Transcription object
   */
  set(item: Transcription, data: Partial<Transcription>): Transcription {
    return {
      ...item,
      ...data,
    };
  },
};

export interface GeneralRecording {
  _id: string
  isVideo: boolean
  filename: string
  duration: number // in seconds
  markers: string[]
  questions: string[]
  photos: string[]
  createdAt: string
  updatedAt: string
}

export interface NewGeneralRecording extends Omit<GeneralRecording, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

export const generalRecordingDefaults = (): GeneralRecording => ({
  _id: '',
  isVideo: false,
  filename: '',
  duration: 0,
  markers: [],
  questions: [],
  photos: [],
  createdAt: '',
  updatedAt: '',
});

export interface GeneralRecordingHelper {
  set(recording: GeneralRecording, data: Partial<GeneralRecording>): GeneralRecording
}
export const generalRecordingHelper = {
  /**
   * Creates an updated GeneralRecording object
   */
  set(recording: GeneralRecording, data: Partial<GeneralRecording>): GeneralRecording {
    return {
      ...recording,
      ...data,
    };
  },
};

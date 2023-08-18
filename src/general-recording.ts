export interface GeneralRecording {
    _id: string
    isVideo: boolean
    filename: string
    markers: string[]
    questions: string[]
    photos: string[]
}

export const generalRecordingDefaults = (): GeneralRecording => ({
    _id: '',
    isVideo: false,
    filename: '',
    markers: [],
    questions: [],
    photos: [],
});

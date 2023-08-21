export interface GeneralQuestion {
    _id: string
    cultureEvent: string
    startTime: number
    filename: string
    text: string
}
export const generalQuestionDefaults = (): GeneralQuestion => ({
    _id: '',
    cultureEvent: '',
    startTime: 0,
    filename: '',
    text: '',
});

export interface Observation {
    _id: string
    title: string
    claUnit: number
    date: string
    text: string
}
export const observationDefaults = (): Observation => ({
    _id: '',
    title: '',
    claUnit: 1,
    date: '',
    text: '',
});

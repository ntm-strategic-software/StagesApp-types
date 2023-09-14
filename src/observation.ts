export interface Observation {
    _id: string
    title: string
    claUnit: number
    date: string
    text: string
    createdAt?: string
    updatedAt?: string
}
export const observationDefaults = (): Observation => ({
    _id: '',
    title: '',
    claUnit: 1,
    date: '',
    text: '',
    createdAt: '',
    updatedAt: '',
});

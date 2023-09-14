export interface Tag {
    tagText: string;
    createdAt?: string
    updatedAt?: string
}
export const tagDefaults = (): Tag => ({
    tagText: '',
    createdAt: '',
    updatedAt: '',
});

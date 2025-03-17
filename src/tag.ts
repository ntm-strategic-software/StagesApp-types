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

export interface TagHelper {
    set(tag: Tag, data: Partial<Tag>): Tag
}
export const tagHelper = {
    /**
     * Creates an updated Tag object
     */
    set(tag: Tag, data: Partial<Tag>): Tag {
        return {
            ...tag,
            ...data,
        };
    },
};

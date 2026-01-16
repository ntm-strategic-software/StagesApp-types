/**
 * Represents a tag. Tags are a plain text filing system the user can create if they want.
 * Users may prefix sets of tags with special characters, so groups of tags will appear together
 * when all tags are listed alphabetically.
 *
 * We may ship with some default tags, for example, a set of grammar tags
 */
export interface Tag {
    /** Text of the tag (unique key) */
    tagText: string;
    /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
    createdAt: string
    /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
    updatedAt: string
}

/**
 * NewTag is Tag with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewTag extends Omit<Tag, 'createdAt' | 'updatedAt'> {
    /**
     * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database.
     * If not provided, it should be set when the row is created in the database.
     */
    createdAt?: string
    /**
     * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database.
     * If not provided, it should be set when the row is updated in the database.
     */
    updatedAt?: string
}

/** Returns a new Tag object with default values */
export const tagDefaults = (): Tag => ({
    tagText: '',
    createdAt: '',
    updatedAt: '',
});

/** Interface defining helper methods for Tag */
export interface TagHelper {
    set(tag: Tag, data: Partial<Tag>): Tag
}
/** Object with helper methods for Tag */
export const tagHelper: TagHelper = {
    /** Creates an updated Tag object by merging an existing Tag object with new values */
    set(tag: Tag, data: Partial<Tag>): Tag {
        return {
            ...tag,
            ...data,
        };
    },
};

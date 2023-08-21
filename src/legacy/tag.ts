import { Tag as TagInterface, tagDefaults } from '../tag';

/**
 * Class representing a tag.  Tags are a plain text filing system the user can create if they want.
 * Users may prefix sets of tags with special characters, so groups of tags will appear together
 * when all tags are listed alphabetically.
 *
 * We may ship with some default tags, for example, a set of grammar tags
 */
export class Tag implements TagInterface {

  /**
   * Text of the tag
   */
  tagText: string;

  /**
   * Creates a Tag object
   */
  constructor(data?: TagInterface) {
    const defaults = tagDefaults();
    this.tagText = data?.tagText || defaults.tagText;
  }

  /**
   * Creates an updated Tag object
   */
  set(data: Partial<TagInterface>) {
    return new Tag({
      ...this,
      ...data,
    });
  }

}

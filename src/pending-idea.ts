export interface PendingIdea {
  _id: string
  text: string
  linkedFile: string
  deferToStage: number
  createdAt: string
  updatedAt: string
}

export interface NewPendingIdea extends Omit<PendingIdea, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

export const pendingIdeaDefaults = (): PendingIdea => ({
  _id: '',
  text: '',
  linkedFile: '',
  deferToStage: 0,
  createdAt: '',
  updatedAt: '',
});

export interface PendingIdeaHelper {
  set(item: PendingIdea, data: Partial<PendingIdea>): PendingIdea
}
export const pendingIdeaHelper = {
  /**
   * Creates an updated PendingIdea object
   */
  set(item: PendingIdea, data: Partial<PendingIdea>): PendingIdea {
    return {
      ...item,
      ...data,
    };
  },
};

export interface PendingIdea {
  _id: string
  text: string
  linkedFile: string
  deferToStage: number
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

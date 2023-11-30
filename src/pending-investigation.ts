export interface PendingInvestigation {
  _id: string
  text: string
  linkedFile: string
  deferToStage: number
  createdAt?: string
  updatedAt?: string
}
export const pendingInvestigationDefaults = (): PendingInvestigation => ({
  _id: '',
  text: '',
  linkedFile: '',
  deferToStage: 0,
  createdAt: '',
  updatedAt: '',
});

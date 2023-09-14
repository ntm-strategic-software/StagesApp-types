export interface PendingInvestigation {
  _id: string
  text: string
  linkedFile: string
  createdAt?: string
  updatedAt?: string
}
export const pendingInvestigationDefaults = (): PendingInvestigation => ({
  _id: '',
  text: '',
  linkedFile: '',
  createdAt: '',
  updatedAt: '',
});

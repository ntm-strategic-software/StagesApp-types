export interface PendingInvestigation {
  _id: string
  text: string
  linkedFile: string
}
export const pendingInvestigationDefaults = (): PendingInvestigation => ({
  _id: '',
  text: '',
  linkedFile: '',
});

export interface PendingInvestigation {
  _id: string
  text: string
  linkedFile: string
}
export const pendingInterfaceDefaults = (): PendingInvestigation => ({
  _id: '',
  text: '',
  linkedFile: '',
});

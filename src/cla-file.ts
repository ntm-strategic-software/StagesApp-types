export interface CLAFile {
  fileNumber: number
  activityPlanIds: string[]
  linkedFiles: string[]
  imported: boolean
  readOnly: boolean
  deferToStage: number
  canLinkToTask: boolean
  createdAt?: string
  updatedAt?: string
}
export const claFileDefaults = (): CLAFile => ({
  fileNumber: 0,
  activityPlanIds: [],
  linkedFiles: [],
  imported: false,
  readOnly: false,
  deferToStage: 0,
  canLinkToTask: false,
  createdAt: '',
  updatedAt: '',
});

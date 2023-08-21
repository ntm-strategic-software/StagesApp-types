export interface CLAFile {
  fileNumber: number
  activityPlanIds: string[]
  linkedFiles: string[]
  imported: boolean
  readOnly: boolean
  deferToStage: number
  canLinkToTask: boolean
}
export const claFileDefaults = (): CLAFile => ({
  fileNumber: 0,
  activityPlanIds: [],
  linkedFiles: [],
  imported: false,
  readOnly: false,
  deferToStage: 0,
  canLinkToTask: false,
});

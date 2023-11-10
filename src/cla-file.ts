export interface CLAFile {
  _id: string
  fileNumber: number
  claUnit: number
  title: string
  note: string
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
  _id: '',
  fileNumber: 0,
  claUnit: 1,
  title: '',
  note: '',
  activityPlanIds: [],
  linkedFiles: [],
  imported: false,
  readOnly: false,
  deferToStage: 0,
  canLinkToTask: false,
  createdAt: '',
  updatedAt: '',
});

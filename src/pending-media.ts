import { PendingFileType } from './constants';

export interface PendingMedia {
  _id: string
  fileType: PendingFileType|''
  deferToStage: number
  title: string
  filename: string
  isProcessed: boolean
  createdAt?: string
  updatedAt?: string
}
export const pendingMediaDefaults = (): PendingMedia => ({
  _id: '',
  fileType: '',
  deferToStage: 0,
  title: '',
  filename: '',
  isProcessed: false,
  createdAt: '',
  updatedAt: '',
});

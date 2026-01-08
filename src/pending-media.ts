import { PendingFileType } from './constants';

export interface PendingMedia {
  _id: string
  fileType: PendingFileType|''
  deferToStage: number
  title: string
  filename: string
  isProcessed: boolean
  createdAt: string
  updatedAt: string
}

export interface NewPendingMedia extends Omit<PendingMedia, 'createdAt' | 'updatedAt'> {
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

export interface PendingMediaHelper {
  set(item: PendingMedia, data: Partial<PendingMedia>): PendingMedia
}
export const pendingMediaHelper = {
  /**
   * Creates an updated PendingMedia object
   */
  set(item: PendingMedia, data: Partial<PendingMedia>): PendingMedia {
    return {
      ...item,
      ...data,
    };
  },
};

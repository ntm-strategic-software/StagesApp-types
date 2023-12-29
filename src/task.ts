import { Draggable, PlayerType, RecorderButtonType, TaskBox } from './constants';

export interface Task {
  taskTitle: string
  taskNotes: string[]
  taskText: string
  taskBox: TaskBox|'',
  taskBoxGroup: number
  taskBoxOptions: TaskBox[]
  droppableTypes: Draggable[]
  taskPhotos: string[]
  taskClaFileId: string
  recorderButtonType: RecorderButtonType|''
  playerButtonType: PlayerType|''
  showQuickCaptureButtons: boolean
  nextTaskSameSession: boolean
  createdAt?: string
  updatedAt?: string
}
export const taskDefaults = (): Task => ({
  taskTitle: '',
  taskNotes: [],
  taskText: '',
  taskBox: '',
  taskBoxGroup: 0,
  taskBoxOptions: [],
  droppableTypes: [
    Draggable.PI_TEXT_ONLY_DRAGGABLE,
  ],
  taskPhotos: [],
  taskClaFileId: '',
  recorderButtonType: '',
  playerButtonType: '',
  nextTaskSameSession: false,
  showQuickCaptureButtons: false,
  createdAt: '',
  updatedAt: '',
});

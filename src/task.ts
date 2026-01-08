import { Draggable, PlayerType, RecorderButtonType, TaskBox, JumpToView } from './constants';

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
  jumpToView: JumpToView|''
  nextTaskSameSession: boolean
  createdAt: string
  updatedAt: string
}

export interface NewTask extends Omit<Task, 'createdAt' | 'updatedAt'> {
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
  jumpToView: '',
  createdAt: '',
  updatedAt: '',
});

export interface TaskHelper {
  set(task: Task, data: Partial<Task>): Task
}
export const taskHelper = {
  /**
   * Creates an updated Task object
   */
  set(task: Task, data: Partial<Task>): Task {
    return {
      ...task,
      ...data,
    };
  },
};

import { Injectable } from '@angular/core';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getAllTasks(): TaskItem[] {
    throw new Error('not implemented yet');
  }

  addTask(newTask: NewTask) {}

  removeTask(existingTask: TaskItem) {}
}

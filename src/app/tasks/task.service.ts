import { Injectable } from '@angular/core';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  private tasks: TaskItem[] = [];

  getAllTasks(): ReadonlyArray<TaskItem> {
    return this.tasks;
  }

  addTask(newTask: NewTask) {
    this.tasks = this.tasks.concat(new TaskItem(newTask.title));
  }

  removeTask(existingTask: TaskItem) {
    console.log('removiendo desde servicio');

    this.tasks = this.tasks.filter((task) => task != existingTask);
  }
}

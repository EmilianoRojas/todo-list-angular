import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  private tasks = new BehaviorSubject([new TaskItem('Todo Test')]);

  getAllTasks(): Observable<TaskItem[]> {
    return this.tasks;
  }

  addTask(newTask: NewTask) {
    var updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title));
    this.tasks.next(updatedTasks);
  }

  removeTask(existingTask: TaskItem) {
    // console.log('removiendo desde servicio');
    var updatedTasks = this.tasks.value.filter((task) => task != existingTask);
    this.tasks.next(updatedTasks);
  }
}

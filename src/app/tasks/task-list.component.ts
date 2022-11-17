import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  newTask: NewTask = new NewTask();

  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  }

  tasks: TaskItem[] = [];

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched == false) return;
    if (taskNgForm.valid == false) return;
    this.tasks.push(new TaskItem(this.newTask.title));
    taskNgForm.reset({ date: this.newTask.date });
  }

  remove(existingTask: TaskItem) {
    let confirmed = confirm(`Deseas eliminar el item "${existingTask.title}"?`);

    if (confirmed) {
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }
}

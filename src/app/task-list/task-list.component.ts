import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  date: Date = new Date();
  newTaskTitle: string = '';
  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date']);
  }

  tasks: Task[] = [];

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched == false) return;
    if (taskNgForm.valid == false) return;
    this.tasks.push(new Task(this.newTaskTitle));
    taskNgForm.reset({ date: this.date });
  }

  remove(existingTask: Task) {
    let confirmed = confirm(`Deseas eliminar el item "${existingTask.title}"?`);

    if (confirmed) {
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }
}

class Task {
  public isDone = false;

  constructor(public title: string) {}

  toggleIsDone() {
    this.isDone = !this.isDone;
  }
}

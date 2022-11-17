import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    var date: Date = new Date(this.route.snapshot.params['date']);
    console.log(date);
  }

  tasks: Task[] = [];

  add(newTask: string) {
    if (newTask) {
      this.tasks.push(new Task(newTask));
    }
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

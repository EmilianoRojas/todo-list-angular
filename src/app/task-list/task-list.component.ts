import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks: Task[] = [];

  add(newTask: string){
    if (newTask) {      
      this.tasks.push(new Task(newTask));
    }
  }

  remove(existingTask: Task){
    let confirmed = confirm(`Deseas eliminar el item "${existingTask.title}"?`)

    if (confirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }
}

class Task {

  public isDone = false;

  constructor(public title: string){}

  toggleIsDone(){
    this.isDone = !this.isDone
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks: string[] = [];

  add(newTask: string){
    if (newTask) {      
      this.tasks.push(newTask);
    }
  }

  remove(existingTask: string){
    let confirmed = confirm(`Deseas eliminar el item "${existingTask}"?`)

    if (confirmed) {
      this.tasks = this.tasks.filter( task => task != existingTask);
    }
  }

  markAsDone(task: string){

  }
}

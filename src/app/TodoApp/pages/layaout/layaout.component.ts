import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../../interfaces/task.interface';

import { TodoAppService } from '../../services/TodoApp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeIcons, MenuItem } from 'primeng/api';
@Component({
  selector: 'app-layaout',
  templateUrl: './layaout.component.html',
  styleUrls: ['./layaout.component.css']
})
export class LayaoutComponent implements OnInit {

  constructor(private TodoAppService: TodoAppService, private fb: FormBuilder) {}


  todo: ITask[] = [];

  done: ITask[] = [];

  Progress : ITask[] = [];
  todoFrom!: FormGroup;

  // Asegúrate de definir descriptionValue y tasksValue en tu componente
  descriptionValue: string = '';


  ngOnInit() {
    this.todoFrom = this.fb.group({
      description: ['', Validators.required]
    });


    this.TodoAppService.task$.subscribe((tasks) => {
      // Update the local property consistently
      this.todo = tasks;
      console.log(this.todo);
    });

  }


// do.component.ts
drop(event: CdkDragDrop<ITask[]>): void {
  // Ensure that all arrays are defined
  if (event.container.data && event.previousContainer.data) {
    if (event.previousContainer === event.container) {
      // Move within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Transfer between lists
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}



addTask() {
  const description = this.todoFrom.get('description')?.value;
  console.log(description)

  if (description) {
    const newTask: ITask = { description, done: false };

    // Update the local todo array
    this.todo.push(newTask);

    // Reset the form
    this.todoFrom.reset();
  }
}

deleteTask(task: ITask) {
  const index = this.todo.indexOf(task);
  const index2=this.Progress.indexOf(task);
  const index3= this.done.indexOf(task);
  if (index!== -1) {
    this.todo.splice(index, 1);
  }
  if(index2!== -1) {
    this.Progress.splice(index2, 1);
  }
  if(index3!== -1) {
    this.done.splice(index3, 1);
  }

}

editTask(task: ITask) {
  const index = this.todo.indexOf(task);
  const index2=this.Progress.indexOf(task);
  const index3= this.done.indexOf(task);

  if (index!== -1) {
    this.todo[index].description = this.descriptionValue;
  }
  if(index2!== -1) {
    this.Progress[index2].description = this.descriptionValue;
  }
  if(index3!== -1) {
    this.done[index3].description = this.descriptionValue;
  }
  this.descriptionValue = '';
  this.todoFrom.reset();
}


}

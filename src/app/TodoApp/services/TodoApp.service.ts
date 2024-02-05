import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/task.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoAppService {
  private taskSubject = new BehaviorSubject<ITask[]>([]);
  task$ = this.taskSubject.asObservable();

  addTask(tasks: ITask[]): void {
    // Ensure tasks is an array before attempting to spread it
    const updatedTasks = Array.isArray(tasks) ? tasks : [tasks];

    // Update the tasks array in the service
    this.taskSubject.next([...this.taskSubject.getValue(), ...updatedTasks]);
  }
constructor() { }
drop(event: CdkDragDrop<ITask[]>): void {
  // Check if the item is moved within the same list
  if (event.previousContainer === event.container) {
    // Handle moving within the same list
    // For example, you can use moveItemInArray
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    // Handle transferring the item between lists
    // Remove the item from the source list
    const transferredTask = event.previousContainer.data[event.previousIndex];
    event.previousContainer.data.splice(event.previousIndex, 1);

    // Add the item to the target list
    event.container.data.splice(event.currentIndex, 0, transferredTask);
  }

  // Notify subscribers about the updated tasks
  this.taskSubject.next([...event.container.data]);
}
// Inside TodoAppService
transferTask(previousIndex: number, currentIndex: number): void {
  const tasks = this.taskSubject.getValue();
  const transferredTask = tasks[previousIndex];

  // Remove task from the previous position
  tasks.splice(previousIndex, 1);

  // Insert task at the new position
  tasks.splice(currentIndex, 0, transferredTask);

  // Notify subscribers about the updated tasks
  this.taskSubject.next([...tasks]);
}





}

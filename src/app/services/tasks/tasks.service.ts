import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Task } from '../../models/tasks-task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  idGiven: number = 1;
  currentTasks: Task[] = [];
  doneTasks: Task[] = [];

  constructor() {}

  addCurrentTask(task: Task) {
    this.currentTasks.push(task);
    console.log(this.currentTasks);
  }

  deleteTask(taskId: number) {
    const index = this.currentTasks.findIndex((i) => i.id === taskId);
    this.currentTasks.splice(index, 1);
  }

  changePriority(taskId: number) {
    const index = this.currentTasks.findIndex((i) => i.id === taskId);
    console.log(this.currentTasks[index].priority);
    this.currentTasks[index].priority = !this.currentTasks[index].priority;
    console.log(this.currentTasks[index].priority);
  }

  getTasks() {
    const currentTasksObservable = new Observable((observer) => {
      observer.next(this.currentTasks);
    });
    return currentTasksObservable;
  }
}

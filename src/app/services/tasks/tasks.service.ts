import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Task } from '../../models/tasks-task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  currentTasks: Task[] = [];

  constructor() {}

  addCurrentTask(task: Task) {
    task.id++;
    this.currentTasks.push(task);
    console.log(this.currentTasks);
  }

  deleteTask(task: Task) {
    // const index = this.currentTasks.findIndex((i) => i.currentTasks === task)
  }

  getTasks() {
    const currentTasksObservable = new Observable((observer) => {
      observer.next(this.currentTasks);
    });
    return currentTasksObservable;
  }
}

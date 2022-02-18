import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Task } from '../../models/tasks-task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  currentTasks: Task[] = [];

  constructor() { }

  addTask(task: Task) {
    this.currentTasks.push(task);
    console.log(this.currentTasks);
  }

  getTasks() {
    const currentTasksObservable = new Observable<Task[]>((observer) => {
      console.log(observer);
      observer.next(this.currentTasks);
      console.log(observer)
      console.log(currentTasksObservable)
      return currentTasksObservable
    })

    }

}


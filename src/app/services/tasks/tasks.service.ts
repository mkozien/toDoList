import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Task } from '../../models/task';

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

  deleteCurrentTask(taskId: number) {
    const index = this.currentTasks.findIndex((i) => i.id === taskId);
    this.currentTasks.splice(index, 1);
  }

  deleteDoneTask(taskId: number) {
    const index = this.doneTasks.findIndex((i) => i.id === taskId);
    this.doneTasks.splice(index, 1);
  }

  changePriority(taskId: number) {
    const index = this.currentTasks.findIndex((i) => i.id === taskId);
    console.log(this.currentTasks[index].priority);
    this.currentTasks[index].priority = !this.currentTasks[index].priority;
    console.log(this.currentTasks[index].priority);
  }

  markAsDone(taskId: number) {
    const index = this.currentTasks.findIndex((i) => i.id === taskId);
    this.doneTasks.push(this.currentTasks[index]);
    this.currentTasks.splice(index, 1);
  }

  getTaskBack(taskId: number) {
    const index = this.doneTasks.findIndex((i) => i.id === taskId);
    this.currentTasks.push(this.doneTasks[index]);
    this.doneTasks.splice(index, 1);
  }

  getCurrentTasks() {
    const currentTasksObservable = new Observable((observer) => {
      observer.next(this.currentTasks);
    });
    return currentTasksObservable;
  }

  getDoneTasks() {
    const doneTasksObservable = new Observable((observer) => {
      observer.next(this.doneTasks);
    });
    return doneTasksObservable;
  }
}

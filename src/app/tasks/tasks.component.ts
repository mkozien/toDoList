import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { Task } from '../models/tasks-task';
import { TasksService } from '../services/tasks/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit, OnDestroy {
  currentTasks: Task[] = [];
  private currentTasksSubscription: Subscription;

  constructor(private taskService: TasksService) {}

  addCurrentTask(form: NgForm) {
    const body: Task = new Task(form.value.name, form.value.priority);
    console.log(body);

    this.taskService.addTask(body);
    form.reset();
  }

  ngOnInit(): void {
    console.log(this.currentTasks);
    this.currentTasksSubscription = this.taskService
      .getTasks()
      .subscribe((currentTasks: Task[]) => {
        this.currentTasks = currentTasks;
      });
    console.log(this.currentTasks);
  }

  ngOnDestroy(): void {
    this.currentTasksSubscription.unsubscribe();
  }
}

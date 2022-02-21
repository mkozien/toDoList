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
  priority: boolean;
  currentTasks: Task[] = [];
  private currentTasksSubscription: Subscription;

  constructor(private taskService: TasksService) {}

  onAddCurrentTask(form: NgForm) {
    console.log(form.value.priority);
    if (form.value.priority === '' || form.value.priority === null) {
      this.priority = false;
    } else {
      this.priority = form.value.priority;
    }
    const body: Task = new Task(form.value.name, this.priority);
    console.log(body);

    this.taskService.addCurrentTask(body);
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

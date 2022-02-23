import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { Task } from '../models/task';
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
  doneTasks: Task[] = [];
  private doneTasksSubscription: Subscription;

  constructor(private taskService: TasksService) {}

  onAddCurrentTask(form: NgForm) {
    console.log(form.value.priority);
    if (form.value.priority === '' || form.value.priority === null) {
      this.priority = false;
    } else {
      this.priority = form.value.priority;
    }
    const body: Task = new Task(
      this.taskService.idGiven++,
      form.value.name,
      this.priority
    );
    console.log(body);

    this.taskService.addCurrentTask(body);
    form.reset();
  }

  onDeleteCurrentTask(id: number) {
    this.taskService.deleteCurrentTask(id);
    console.log(this.currentTasks);
  }

  onDeleteDoneTask(id: number) {
    this.taskService.deleteDoneTask(id);
    console.log(this.doneTasks);
  }

  onChangePriority(id: number) {
    this.taskService.changePriority(id);
    console.log(this.currentTasks);
  }

  onMarkAsDone(id: number) {
    this.taskService.markAsDone(id);
    console.log(this.currentTasks);
    console.log(this.doneTasks);
  }

  onGetTaskBack(id: number) {
    this.taskService.getTaskBack(id);
    console.log(this.currentTasks);
    console.log(this.doneTasks);
  }

  ngOnInit(): void {
    this.currentTasksSubscription = this.taskService
      .getCurrentTasks()
      .subscribe((currentTasks: Task[]) => {
        this.currentTasks = currentTasks;
      });
    console.log(this.currentTasks);

    this.doneTasksSubscription = this.taskService
      .getDoneTasks()
      .subscribe((doneTasks: Task[]) => {
        this.doneTasks = doneTasks;
      });
    console.log(this.doneTasks);
  }

  ngOnDestroy(): void {
    this.currentTasksSubscription.unsubscribe();
    this.doneTasksSubscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Task } from '../models/tasks-task';
import { TasksService } from '../services/tasks/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  currentTasks: Task[] = [];

  constructor(private taskService: TasksService) {}

  addCurrentTask(form: NgForm) {
    const body: Task = new Task(form.value.name, form.value.priority);
    console.log(body);

    this.taskService.addTask(body);
  }

  ngOnInit(): void {}

}

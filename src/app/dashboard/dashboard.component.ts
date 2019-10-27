import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todoItems: TodoItem[];

  constructor() {
    this.todoItems = [
      new TodoItem("Todo item #1", "Tomorrow"),
      new TodoItem("Todo item #1", "The next day"),
    ];
  }
  
  addTodoItem(title: HTMLInputElement, duedate: HTMLInputElement): boolean {
    console.log('Adding new todo-item: ${title.value} and duedate: ${duedate.value}');

    this.todoItems.push(new TodoItem(title.value, duedate.value));
    title.value = '';
    duedate.value = '';
    return false;
  }

  ngOnInit() {
  }

}

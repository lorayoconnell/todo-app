import { Component, OnInit } from '@angular/core';
import { NewTodoItemComponent } from '../new-todo-item/new-todo-item.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  newTodoItem: NewTodoItemComponent;
  todoList: TodoListComponent;

  constructor() { }

  ngOnInit() { }

}

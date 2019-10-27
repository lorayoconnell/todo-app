import { Component } from '@angular/core';
import { TodoItem } from './todo-item/todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  todoItems: TodoItem[];

  constructor() {
    this.todoItems = [
      new TodoItem("Todo item #1", "Tomorrow"),
      new TodoItem("Todo item #1", "The next day"),
    ]
  }

  // should I assume the duedate is undefined unless specifically defined

  addTodoItem(title: HTMLInputElement, duedate: HTMLInputElement) {
    console.log('Adding new todo-item');

    this.todoItems.push(new TodoItem(title.value, duedate.value));
    title.value = '';
    duedate.value = '';
  }

}

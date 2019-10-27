import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.model';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'newTodoItem',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})

export class NewTodoItemComponent implements OnInit {

  todoList: TodoListComponent;
  todoItems: TodoItem[];

  constructor() { }

  ngOnInit() { }

  addTodoItem(title: HTMLInputElement, duedate: HTMLInputElement): boolean {
    console.log('Adding new todo-item: ${title.value} and duedate: ${duedate.value}');

    this.todoItems.push(new TodoItem(title.value, duedate.value));
    title.value = '';
    duedate.value = '';
    return false;
  }
  
}

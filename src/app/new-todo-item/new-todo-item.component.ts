import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.model';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoServiceService } from '../todo-service.service';
// import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'newTodoItem',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})

export class NewTodoItemComponent implements OnInit {

  // todoItem: TodoItem;

  todoList: TodoListComponent;
  todoItems: TodoItem[];

  constructor(public todoService: TodoServiceService) { }
  // constructor() { }

  ngOnInit() { }

  addTodoItem(title: HTMLInputElement, duedate: HTMLInputElement): boolean {
    console.log('Adding new todo-item: ${title.value} and duedate: ${duedate.value}');


    this.todoService.addItem(new TodoItem(title.value, duedate.value)); // push to service

    // this.todoList.getSize();
    // this.addItem(new TodoItem(title.value, duedate.value));
    
    // this.todoItems.push(new TodoItem(title.value, duedate.value));

    title.value = '';
    duedate.value = '';
    return false;
  }
  
}

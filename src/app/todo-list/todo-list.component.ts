import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.model';
// import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoServiceService } from '../todo-service.service'; 

@Component({
  selector: 'todoList',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  //todoItem: TodoItemComponent;

  // todoItem: TodoItem;

  todoItems: TodoItem[];

  /*
  constructor() {
    this.todoItems = [
      new TodoItem("Todo item #1", "Tomorrow"),
      new TodoItem("Todo item #1", "The next day"),
    ];
  }
  */

  constructor(public todoService: TodoServiceService) {
    // get list from service
    this.todoItems =  this.todoService.todoItems;
  }

  //addItem(item: TodoItem) {
  //  console.log("in todo-list.component.ts addItem");
  // }

  // getSize() {
  //  console.log("todoItems.length: " + this.todoItems.length);
  // }

  addTodoItem(title: HTMLInputElement, duedate: HTMLInputElement): boolean {
    console.log('Adding new todo-item: ${title.value} and duedate: ${duedate.value}');

    this.todoItems.push(new TodoItem(title.value, duedate.value));
    title.value = '';
    duedate.value = '';
    return false;
  }

  
  ngOnInit() {
    //this.todoItems;
  }
  
  //testFunction() {
  //  console.log("inside of todo-list.component.ts");
  //}


}

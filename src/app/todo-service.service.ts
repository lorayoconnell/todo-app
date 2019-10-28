import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item/todo-item.model';
// import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';

@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {

  todoItems: TodoItem[];

  constructor() {
    this.addDummyItems();
  }

  addDummyItems() {
    // console.log("adding dummy items");
    this.todoItems = [
      new TodoItem("Todo item #1", "Tomorrow"),
      new TodoItem("Todo item #1", "The next day"),
    ];
  }

  addItem(item: TodoItem) {
    // console.log("TodoServiceService adding a new item: " + item.title);
    this.todoItems.push(item);
    console.log("todoItems.length: " + this.todoItems.length);
  }

  updateItem(item: TodoItem) {

  }

  deleteItem(item: TodoItem) {

  }


  /*
  todoItem: TodoItem;
  todoItems: TodoItem[];
  // or just todolist
  todoList: TodoListComponent;

  getItems(): TodoItem[] {
    return this.todoItems;
  }



  updateItem() {

  }

  deleteItem() {

  }

*/

}

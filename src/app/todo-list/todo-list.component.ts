import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'; 
import { map } from 'rxjs/operators';

@Component({
  selector: 'todoList',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todoItems: any;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoItemsList();
  }

  getTodoItemsList() {
    this.todoService.getItemsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }) )
      )
    ).subscribe(todoItems => {
      this.todoItems = todoItems;
    });
  }

  deleteTodoItems() {
    this.todoService.deleteAll().catch(err => console.log(err));
  }

  getSize() {
    console.log("list size: " + this.todoService.todoItems.length);
  }

}
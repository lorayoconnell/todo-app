import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'newTodoItem',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})

export class NewTodoItemComponent implements OnInit {

  todoItem: TodoItem = new TodoItem();
  dueDateChoice: string = "";

  constructor(private todoService: TodoService) { }

  ngOnInit() { }

  save() {
    this.todoService.createTodoItem(this.todoItem);
    this.todoItem = new TodoItem();
  }
  
}

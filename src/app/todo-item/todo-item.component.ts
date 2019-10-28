import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './todo-item.model';
// import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'todoItem',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem;

  // todoItems: TodoItem[];

  // constructor(private todoServiceService: TodoServiceService) { }

  constructor() { }

  ngOnInit() {
  //  this.getItems();
  }

  removeItem() {
    console.log("remove item btn pressed");
  }

  // getItems(): void {
  //  this.todoServiceService.getItems();  // .subscribe.... from heroes.component.ts
  // }

}

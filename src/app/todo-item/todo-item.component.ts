import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './todo-item.model';

@Component({
  selector: 'todoItem',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem;

  constructor() { }

  ngOnInit() {
  }

}

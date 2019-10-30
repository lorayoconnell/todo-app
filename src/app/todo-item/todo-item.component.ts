import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './todo-item.model';
import { TodoService } from '../todo.service'

@Component({
  selector: 'todoItem',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem;

  constructor(private todoService: TodoService) { }

  ngOnInit() { }

  updateItemDue(dueStr: string) {
    switch(dueStr) {
      case "urgent":
        this.todoItem.urgent = true;
        this.todoService.updateItem(this.todoItem.key, { urgent: true });
        this.todoService.updateItem(this.todoItem.key, { weeks: false });
        this.todoService.updateItem(this.todoItem.key, { days: false });
        break;
      case "days":
        this.todoItem.days = true;
        this.todoService.updateItem(this.todoItem.key, { days: true });
        this.todoService.updateItem(this.todoItem.key, { weeks: false });
        this.todoService.updateItem(this.todoItem.key, { urgent: false });
        break;
      case "weeks":
        this.todoItem.weeks = true;
        this.todoService.updateItem(this.todoItem.key, { weeks: true });
        this.todoService.updateItem(this.todoItem.key, { days: false });
        this.todoService.updateItem(this.todoItem.key, { urgent: false });
        break;
    }
    this.todoService.updateItem(this.todoItem.key, { due: dueStr });
  }

  removeItem() {
    this.todoService.deleteItem(this.todoItem.key).catch(err => console.log(err));
  }

}
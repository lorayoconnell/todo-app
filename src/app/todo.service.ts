import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { TodoItem } from './todo-item/todo-item.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private dbPath = '/todoItems';
  todoItemsRef: AngularFireList<TodoItem> = null;
  todoItems: TodoItem[];

  constructor(private db: AngularFireDatabase) {
    this.todoItemsRef = db.list(this.dbPath);
  }

  createTodoItem(item: TodoItem): void {
    item.due = "normal";
    item.urgent = false;
    item.days = false;
    item.weeks = false;
    this.todoItemsRef.push(item);
  }

  updateItem(key: string, value: any): Promise<void> {
    return this.todoItemsRef.update(key, value);
  }

  deleteItem(key: string): Promise<void> {
    return this.todoItemsRef.remove(key);
  }

  getItemsList(): AngularFireList<TodoItem> {
    return this.todoItemsRef;
  }

  deleteAll(): Promise<void> {
    return this.todoItemsRef.remove();
  }

}

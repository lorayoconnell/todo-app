import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: NewTodoItemComponent },
  { path: 'list', component: TodoListComponent },
  { path: '', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const appComponents = [
  AppComponent, TodoItemComponent, DashboardComponent,
  TodoListComponent, NewTodoItemComponent, PageNotFoundComponent
]
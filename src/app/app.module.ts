import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule, appComponents } from './app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { TodoService } from './todo.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

@Component ({
  selector: 'app-root',
  template: `<h1> {{ (item | async)?.name }}</h1>`,
})

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoItemComponent,
    TodoListComponent,
    NewTodoItemComponent,
    PageNotFoundComponent,
    appComponents
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})

export class AppModule { }


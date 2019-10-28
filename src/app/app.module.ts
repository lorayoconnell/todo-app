import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { TodoServiceService } from './todo-service.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RouterModule, Routes } from '@angular/router';

//const appRoutes: Routes = [
//  { path: 'somePath', component: DashboardComponent },
//  { path: '**', component: PageNotFoundComponent }
//];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    DashboardComponent,
    TodoListComponent,
    NewTodoItemComponent,
    PageNotFoundComponent
  ],
  imports: [
  //  RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }







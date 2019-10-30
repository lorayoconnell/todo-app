import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { TodoService } from './todo.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { Component } from '@angular/core';
// import { Observable } from 'rxjs';

import { RouterModule, Routes } from '@angular/router';

@Component ({
  selector: 'app-root',
  template: `<h1> {{ (item | async)?.name }}</h1>`,
})

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
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})

export class AppModule {

}




  // item: Observable<any>;

  // constructor(db: AngularFireDatabase) {
    // this.item = db.object('item').valueChanges();
  // }

/*

from lecture 6, screenshots @ about 1:06:00

*/







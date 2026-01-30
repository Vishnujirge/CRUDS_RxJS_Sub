import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { StudentDashboardComponent } from './shared/components/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/components/student-form/student-form.component';
import { StudentTableComponent } from './shared/components/student-table/student-table.component'
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { OneComponent } from './shared/components/one/one.component';
import { TwoComponent } from './shared/components/two/two.component';
import { SubFormComponent } from './shared/components/sub-form/sub-form.component';
import { ThreeComponent } from './shared/components/three/three.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentTableComponent,
    NavbarComponent,
    OneComponent,
    TwoComponent,
    SubFormComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

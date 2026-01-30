import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { StudentDashboardComponent } from './shared/components/student-dashboard/student-dashboard.component';
import { SubFormComponent } from './shared/components/sub-form/sub-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TodoDashboardComponent },
  { path: 'subForm', component: SubFormComponent },
  { path: 'student', component: StudentDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/lecturers/edit/edit.component';
import { LecturersComponent } from './components/lecturers/lecturers.component';
import { ReportsComponent } from './components/reports/reports.component';
import { StudentsComponent } from './components/students/students.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'lecturers',
    component: LecturersComponent
  },
  {
    path: 'search',
    component: ReportsComponent
  },
  {
    path: 'lecturers/edit/:resource/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { IndexComponent } from './components/index/index.component';
import { LecturersComponent } from './components/lecturers/lecturers.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

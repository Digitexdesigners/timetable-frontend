import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './components/index/index.component';
import { AuthComponent } from './components/auth/auth.component';
import { StudentsComponent } from './components/students/students.component';
import { LecturersComponent } from './components/lecturers/lecturers.component';
import { MaterialImports } from './material-imports';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AuthComponent,
    StudentsComponent,
    LecturersComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...MaterialImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

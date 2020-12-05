import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LecturersService {

  constructor(
    private http: HttpClient
  ) {}

  addFaculty(payload: any): Observable<any> {
    return this.http.post(environment.baseUrl + '/lecturers/faculties', payload).pipe(
      catchError(this.handleError)
    );
  }

  getFaculties(): Observable<any> {
    return this.http.get(environment.baseUrl + '/lecturers/faculties').pipe(
      catchError(this.handleError)
    )
  }

  deleteFaculty(id: string): Observable<any> {
    return this.http.delete(environment.baseUrl + '/lecturers/faculties/' + id).pipe(
      catchError(this.handleError)
    )
  }

  addDepartment(payload: any): Observable<any> {
    return this.http.post(environment.baseUrl + '/lecturers/departments', payload).pipe(
      catchError(this.handleError)
    );
  }

  getDepartments(): Observable<any> {
    return this.http.get(environment.baseUrl + '/lecturers/departments').pipe(
      catchError(this.handleError)
    )
  }

  deleteDepartent(id: string): Observable<any> {
    return this.http.delete(environment.baseUrl + '/lecturers/departments/' + id).pipe(
      catchError(this.handleError)
    )
  }

  addCourse(payload: any): Observable<any> {
    return this.http.post(environment.baseUrl + '/lecturers/courses', payload).pipe(
      catchError(this.handleError)
    );
  }

  getCourses(): Observable<any> {
    return this.http.get(environment.baseUrl + '/lecturers/courses').pipe(
      catchError(this.handleError)
    )
  }

  deleteCourse(id: string): Observable<any> {
    return this.http.delete(environment.baseUrl + '/lecturers/courses/' + id).pipe(
      catchError(this.handleError)
    )
  }

  addUnit(payload: any): Observable<any> {
    return this.http.post(environment.baseUrl + '/lecturers/units', payload).pipe(
      catchError(this.handleError)
    );
  }

  getUnits(): Observable<any> {
    return this.http.get(environment.baseUrl + '/lecturers/units').pipe(
      catchError(this.handleError)
    )
  }

  deleteUnit(id: string): Observable<any> {
    return this.http.delete(environment.baseUrl + '/lecturers/units/' + id).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}

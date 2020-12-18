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

  searchTimetable(q: string): Observable<any> {
    return this.http.get(environment.baseUrl + '/lecturers/search/' + q).pipe(
      catchError(this.handleError)
    );
  }

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

  getRooms(): Observable<any> {
    return this.http.get(environment.baseUrl + '/lecturers/rooms').pipe(
      catchError(this.handleError)
    )
  }

  getLecturersTT(): Observable<any> {
    return this.http.get(environment.baseUrl + '/lecturers').pipe(
      catchError(this.handleError)
    )
  }

  getStudentsTT(): Observable<any> {
    return this.http.get(environment.baseUrl + '/lecturers/timetable').pipe(
      catchError(this.handleError)
    )
  }

  getResource(resource: string, id: string): Observable<any> {
    return this.http.get(environment.baseUrl + '/lecturers/findOne/' + resource + '/' + id).pipe(
      catchError(this.handleError)
    )
  }

  updateResource(resource: string, id: string, payload: any): Observable<any> {
    return this.http.patch(environment.baseUrl + '/lecturers/updateOne/' + resource + '/' + id, payload).pipe(
      catchError(this.handleError)
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LecturersService } from '../../services/lecturers.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(
    private router: Router,
    private lecturerService: LecturersService
  ) {}

  classes: any[];
  topClasses: any[];

  ngOnInit() {
    this.ensureLoggedIn();
    this.lecturerService.getStudentsTT().subscribe(
      data => {this.classes = data; this.topClasses = data.slice(0, 3)},
      error => console.log(error)
    );
  }

  ensureLoggedIn() {
    const session = JSON.parse(localStorage.getItem('session'));
    if (!session) return this.router.navigate(['/auth']);
    if (!session.id) return this.router.navigate(['/auth']);
  }

}

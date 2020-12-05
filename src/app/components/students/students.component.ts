import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.ensureLoggedIn();
  }

  ensureLoggedIn() {
    const session = JSON.parse(localStorage.getItem('session'));
    // if (typeof session) this.router.navigate(['/auth'])
  }

}

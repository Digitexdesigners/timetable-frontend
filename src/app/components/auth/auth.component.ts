import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rank: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private authSerive: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    localStorage.removeItem('session');
  }

  onLogin() {
    const { valid, value } = this.authForm;
    if (!valid) return;
    this.authSerive.login(value).subscribe(
      response => {
        console.log(response);
        if (response.message) {
          this.snackBar.open(response.message);
          this.authForm.reset();
        } else {
          localStorage.setItem('session', JSON.stringify(response));
          if (response.rank === 'student') this.router.navigate(['/students']);
          if (response.rank === 'lecturer') this.router.navigate(['/lecturers']);
        }
      },
      error => {
        this.snackBar.open(error.error)
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LecturersService } from 'src/app/services/lecturers.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    q: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private lecturerService: LecturersService
  ) {}

  ngOnInit() {}

  onSearch() {
    const { value } = this.searchForm;
    this.lecturerService.searchTimetable(value.q).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

}

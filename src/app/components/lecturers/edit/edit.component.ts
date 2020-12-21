import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LecturersService } from 'src/app/services/lecturers.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  facultyForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  departmentForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    faculty_id: ['', [Validators.required]]
  });

  courseForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    department_id: ['', [Validators.required]]
  });

  unitsForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    day: ['', [Validators.required]],
    time: ['', [Validators.required]],
    course_id: ['', [Validators.required]],
    // room: ['', [Validators.required]],
    // lecturer_id: []
  });

  roomsForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    capacity: ['', [Validators.required]]
  });

  timeSlotsForm: FormGroup = this.fb.group({
    day: ['', [Validators.required]],
    time: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  lecturerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    code: ['', [Validators.required]],
    email: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    staff_no: ['', [Validators.required]]
  });

  timetableForm: FormGroup = this.fb.group({
    year: ['', [Validators.required]],
    description: ['', [Validators.required]],
    semester: ['', [Validators.required]],
    room_id: ['', [Validators.required]],
    unit_id: ['', [Validators.required]],
    slot_id: ['', [Validators.required]],
    lecturer_id: ['', [Validators.required]]
  })

  resource: string = '';
  resourceId: string = '';
  faculties: any[];
  departments: any[];
  courses: any[];
  units: any[];
  rooms: any[];
  classes: any[];
  time_slots: any[];
  lecturers: any[];
  unitDays: any[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  unitTimes: any[] = ['9:00AM - 11:00AM', '11:00AM - 1:00PM', '1:00PM - 3:00PM', '3:00PM - 5:00PM'];

  constructor(
    private fb: FormBuilder,
    private lecturersService: LecturersService,
    public router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.ensureLoggedIn();
    this.getData();
    this.route.params.subscribe(params => {
      this.resource = params.resource;
      this.resourceId = params.id;
      this.lecturersService.getResource(params.resource, params.id).subscribe(
        data => {
          if (params.resource === 'faculty')
            this.facultyForm.patchValue({...data[0]});
          if (params.resource === 'department')
            this.departmentForm.patchValue({...data[0]});
          if (params.resource === 'course')
            this.courseForm.patchValue({...data[0]});
          if (params.resource === 'unit')
            this.unitsForm.patchValue({...data[0]});
          if (params.resource === 'room')
            this.roomsForm.patchValue({...data[0]});
          if (params.resource === 'time_slot')
            this.timeSlotsForm.patchValue({...data[0]});
          if (params.resource === 'lecturer')
            this.lecturerForm.patchValue({...data[0]});
          if (params.resource === 'timetable')
            this.timetableForm.patchValue({...data[0]});
        },
        error => console.log(error)
      )
    });
  }

  ensureLoggedIn() {
    const session = JSON.parse(localStorage.getItem('session'));
    if (!session) return this.router.navigate(['/auth']);
    if (!session.id) return this.router.navigate(['/auth']);
    this.unitsForm.patchValue({
      lecturer_id: session.id ? session.id : ''
    });
  }

  getData() {
    this.lecturersService.getFaculties().subscribe(
      response => this.faculties = response.result,
      error => console.log(error)
    );
    this.lecturersService.getDepartments().subscribe(
      response => this.departments = response.result,
      error => console.log(error)
    );
    this.lecturersService.getCourses().subscribe(
      response => this.courses = response.result,
      error => console.log(error)
    );
    this.lecturersService.getUnits().subscribe(
      response => this.units = response.result,
      error => console.log(error)
    );
    this.lecturersService.getRooms().subscribe(
      response => this.rooms = response.result,
      error => console.log(error)
    );
    this.lecturersService.getStudentsTT().subscribe(
      response => this.classes = response.slice(0, 3),
      error => console.log(error)
    );
    this.lecturersService.getTimeSlots().subscribe(
      response => this.time_slots = response.result,
      error => console.log(error)
    );
    this.lecturersService.getLecturers().subscribe(
      response => this.lecturers = response.result,
      error => console.log(error)
    );
  }

  onEditResource() {
    var payload = {};
    if (this.resource === 'faculty') payload = this.facultyForm.value;
    if (this.resource === 'department') payload = this.departmentForm.value;
    if (this.resource === 'course') payload = this.courseForm.value;
    if (this.resource === 'unit') payload = this.unitsForm.value;
    if (this.resource === 'room') payload = this.roomsForm.value;
    if (this.resource === 'time_slot') payload = this.timeSlotsForm.value;
    if (this.resource === 'lecturer') payload = this.lecturerForm.value;
    if (this.resource === 'timetable') payload = this.timetableForm.value;
    this.lecturersService.updateResource(this.resource, this.resourceId, payload).subscribe(
      data => {
        this.snackbar.open(`${this.resource} updated.`, 'Okay')
      },
      error => console.log(error)
    )
  }

}

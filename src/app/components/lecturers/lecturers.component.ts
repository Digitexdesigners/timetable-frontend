import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LecturersService } from '../../services/lecturers.service';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.scss']
})
export class LecturersComponent implements OnInit {

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
    room: ['', [Validators.required]],
    lecturer_id: []
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

  faculties: any[];
  departments: any[];
  courses: any[];
  units: any[];
  rooms: any[];
  classes: any[];
  allClasses: any[];
  time_slots: any[];
  lecturers: any[];
  unitDays: any[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  unitTimes: any[] = ['9:00AM - 11:00AM', '11:00AM - 1:00PM', '1:00PM - 3:00PM', '3:00PM - 5:00PM'];

  constructor(
    private fb: FormBuilder,
    private lecturersService: LecturersService,
    public router: Router
  ) {}

  ngOnInit() {
    this.ensureLoggedIn();
    this.getData();
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
      response => {this.classes = response.slice(0, 3); this.allClasses = response},
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

  onAddFaculty() {
    const { valid, value } = this.facultyForm;
    if (!valid) return;
    this.lecturersService.addFaculty(value).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onDeleteFaculty(id: string) {
    this.lecturersService.deleteFaculty(id).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onAddDepartment() {
    const { valid, value } = this.departmentForm;
    if (!valid) return;
    this.lecturersService.addDepartment(value).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onDeleteDepartment(id: string) {
    this.lecturersService.deleteDepartent(id).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onAddCourse() {
    const { valid, value } = this.courseForm;
    if (!valid) return;
    this.lecturersService.addCourse(value).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onDeleteCourse(id: string) {
    this.lecturersService.deleteCourse(id).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onAddUnit() {
    const { valid, value } = this.unitsForm;
    if (!valid) return;
    this.lecturersService.addUnit(value).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onDeleteUnit(id: string) {
    this.lecturersService.deleteUnit(id).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onAddRoom() {
    const { valid, value } = this.roomsForm;
    if (!valid) return;
    this.lecturersService.addRoom(value).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onDeleteRoom(id: string) {
    this.lecturersService.deleteRoom(id).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onDeleteTimeSlot(id: string) {
    this.lecturersService.deleteTimeSlot(id).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onDeleteLecturer(id: string) {
    this.lecturersService.deleteLecturer(id).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

  onDeleteTT(id: string) {
    this.lecturersService.deleteTT(id).subscribe(
      response => this.getData(),
      error => console.log(error)
    );
  }

}

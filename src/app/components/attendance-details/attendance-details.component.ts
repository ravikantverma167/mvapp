import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService } from '../../services/attendance.service';
import { Test } from '../../models/test';
import { Attendance } from '../../models/attendance';

@Component({
  selector: 'app-attendance-details',
  templateUrl: './attendance-details.component.html',
  styleUrls: ['./attendance-details.component.css']
})
export class AttendanceDetailsComponent implements OnInit {

  attendance: Attendance;
  id: string;

  constructor(private router: Router, private route: ActivatedRoute, private attendanceService: AttendanceService) {
    this.route.params.forEach((urlParameters) => {
      this.id = urlParameters['id'];
    });
    this.attendanceService.get(this.id).subscribe(result => {
      this.attendance = result;
    })
  }

  ngOnInit() {

  }

  updateData() {
    this.attendance.status = 'submitted';
    this.attendanceService.update(this.id, this.attendance);
    return this.router.navigateByUrl('');
  }

  close() {
    return this.router.navigateByUrl('');
  }



  addTest() {
    if(!this.attendance.tests) {
      this.attendance.tests=[];
    }
    this.attendance.tests.push(new Test());
  }
}

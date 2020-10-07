import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { Attendance } from '../../models/attendance';
@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrls: ['./attendances.component.css']
})
export class AttendancesComponent implements OnInit {


  attendances: Attendance[];

  constructor(private attendanceService: AttendanceService) {
  }

  ngOnInit() {
    this.getAttendancesList();
  }

  getAttendancesList() {
    this.attendanceService.search().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(attendances => {
      this.attendances = attendances;
    })
  }

}

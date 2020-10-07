import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { QueryFn } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import { Attendance } from '../models/attendance';
//import { Observable } from '@firebase/util';

@Injectable()
export class AttendanceService {

  private dbPath = '/attendances';

  attendancesRef: AngularFireList<Attendance> = null;

  constructor(private db: AngularFireDatabase) {
    this.attendancesRef = db.list(this.dbPath);
  }

  update(key: string, value: any): void {
    this.attendancesRef.update(key, value).catch(error => this.handleError(error));
  }

  search(): AngularFireList<Attendance> {
    return this.attendancesRef;
  }

  get(key: string): Observable<Attendance> {
    return this.db.object(`${this.dbPath}/${key}`).valueChanges() as Observable<Attendance>;
  }

  private handleError(error) {
    console.log(error);
  }

}

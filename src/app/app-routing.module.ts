import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendancesComponent } from './components/attendances/attendances.component';
import { AttendanceDetailsComponent } from './components/attendance-details/attendance-details.component';

const routes: Routes = [
  { path: '', component: AttendancesComponent },
  { path: 'attendance-details/:id', component: AttendanceDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { }

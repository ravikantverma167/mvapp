import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
// import { Attendance } from './attendance';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';
import { AttendancesComponent } from './components/attendances/attendances.component';
import { AttendanceDetailsComponent } from './components/attendance-details/attendance-details.component';
import { AttendanceService } from './services/attendance.service';
import { WrittenTestComponent } from './components/written-test/written-test.component';


export const MaterialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
]

@NgModule({
  declarations: [
    AppComponent,
    AttendancesComponent,
    AttendanceDetailsComponent,
    WrittenTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // for database
    RouterModule,
    ...MaterialModules,
    AppRoutingModule
  ],
  providers: [AttendanceService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

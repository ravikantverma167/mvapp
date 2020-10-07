import { Test } from "./test";

export class Attendance {
    key: string;
    sno: string;

    tag: string;
    gr: number;

    out: Date;
    in: Date;

    name: string;

    school: string;
    course: string;
    hod: string;
    teacher: string;

    time: Date;
    alphabet: string;
    topic: string;

    // popup - specific values

    understanding: number;
    otr: number;

    remarks: string;
    homework: string;
    previousHomeworkDone: string;
    attendanceStatus: string;  
    tests: Test[];

    status: string;
  }
  
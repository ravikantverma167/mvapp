import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../../models/test';

@Component({
  selector: 'app-written-test',
  templateUrl: './written-test.component.html',
  styleUrls: ['./written-test.component.css']
})
export class WrittenTestComponent implements OnInit {

  @Input()
  test: Test;

  constructor() { }

  ngOnInit() {
  }

  calculatePercentage() {
    if (!this.test.score && !this.test.outOf) {
      this.test.percentage = 0;
    } else {
      this.test.percentage = (this.test.score / this.test.outOf) * 100;
    }
  }

}

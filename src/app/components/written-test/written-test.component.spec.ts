import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenTestComponent } from './written-test.component';

describe('WrittenTestComponent', () => {
  let component: WrittenTestComponent;
  let fixture: ComponentFixture<WrittenTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrittenTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittenTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

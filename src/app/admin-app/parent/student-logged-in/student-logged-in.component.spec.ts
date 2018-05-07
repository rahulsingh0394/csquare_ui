import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoggedInComponent } from './student-logged-in.component';

describe('StudentLoggedInComponent', () => {
  let component: StudentLoggedInComponent;
  let fixture: ComponentFixture<StudentLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

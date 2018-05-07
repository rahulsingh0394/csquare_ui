import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorLoggedInComponent } from './tutor-logged-in.component';

describe('TutorLoggedInComponent', () => {
  let component: TutorLoggedInComponent;
  let fixture: ComponentFixture<TutorLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

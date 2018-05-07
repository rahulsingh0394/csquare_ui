import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorModelComponent } from './tutor-model.component';

describe('TutorModelComponent', () => {
  let component: TutorModelComponent;
  let fixture: ComponentFixture<TutorModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

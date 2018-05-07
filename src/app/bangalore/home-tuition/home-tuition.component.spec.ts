import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTuitionComponent } from './home-tuition.component';

describe('HomeTutitionComponent', () => {
  let component: HomeTuitionComponent;
  let fixture: ComponentFixture<HomeTuitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTuitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

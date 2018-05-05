import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInNavComponent } from './loggedInNavbar.component';

describe('LoggedInNavComponent', () => {
  let component: LoggedInNavComponent;
  let fixture: ComponentFixture<LoggedInNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

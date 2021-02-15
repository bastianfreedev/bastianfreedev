import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardv9Component } from './dashboardv9.component';

describe('Dashboardv9Component', () => {
  let component: Dashboardv9Component;
  let fixture: ComponentFixture<Dashboardv9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboardv9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboardv9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

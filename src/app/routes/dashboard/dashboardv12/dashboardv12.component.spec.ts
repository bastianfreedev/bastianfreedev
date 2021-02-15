import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardv12Component } from './dashboardv12.component';

describe('Dashboardv12Component', () => {
  let component: Dashboardv12Component;
  let fixture: ComponentFixture<Dashboardv12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboardv12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboardv12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

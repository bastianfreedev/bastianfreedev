import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardv4Component } from './dashboardv4.component';

describe('Dashboardv4Component', () => {
  let component: Dashboardv4Component;
  let fixture: ComponentFixture<Dashboardv4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboardv4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboardv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardv8Component } from './dashboardv8.component';

describe('Dashboardv8Component', () => {
  let component: Dashboardv8Component;
  let fixture: ComponentFixture<Dashboardv8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboardv8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboardv8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardv6Component } from './dashboardv6.component';

describe('Dashboardv6Component', () => {
  let component: Dashboardv6Component;
  let fixture: ComponentFixture<Dashboardv6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboardv6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboardv6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

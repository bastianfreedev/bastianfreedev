import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardv7Component } from './dashboardv7.component';

describe('Dashboardv7Component', () => {
  let component: Dashboardv7Component;
  let fixture: ComponentFixture<Dashboardv7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboardv7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboardv7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

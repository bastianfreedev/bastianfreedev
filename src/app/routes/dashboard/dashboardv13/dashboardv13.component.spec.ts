import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardv13Component } from './dashboardv13.component';

describe('Dashboardv13Component', () => {
  let component: Dashboardv13Component;
  let fixture: ComponentFixture<Dashboardv13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboardv13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboardv13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

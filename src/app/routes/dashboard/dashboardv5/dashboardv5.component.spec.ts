import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardv5Component } from './dashboardv5.component';

describe('Dashboardv5Component', () => {
  let component: Dashboardv5Component;
  let fixture: ComponentFixture<Dashboardv5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboardv5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboardv5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteusuariosComponent } from './reporteusuarios.component';

describe('ReporteusuariosComponent', () => {
  let component: ReporteusuariosComponent;
  let fixture: ComponentFixture<ReporteusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

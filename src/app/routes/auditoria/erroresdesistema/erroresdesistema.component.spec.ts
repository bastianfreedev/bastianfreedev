import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroresdesistemaComponent } from './erroresdesistema.component';

describe('ErroresdesistemaComponent', () => {
  let component: ErroresdesistemaComponent;
  let fixture: ComponentFixture<ErroresdesistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErroresdesistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroresdesistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

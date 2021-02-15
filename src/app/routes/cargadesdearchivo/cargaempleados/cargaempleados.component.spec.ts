import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaempleadosComponent } from './cargaempleados.component';

describe('CargaempleadosComponent', () => {
  let component: CargaempleadosComponent;
  let fixture: ComponentFixture<CargaempleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaempleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

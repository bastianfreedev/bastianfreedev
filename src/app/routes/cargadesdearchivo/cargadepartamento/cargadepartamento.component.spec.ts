import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargadepartamentoComponent } from './Cargadepartamento.component';

describe('CargadepartamentoComponent', () => {
  let component: CargadepartamentoComponent;
  let fixture: ComponentFixture<CargadepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargadepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargadepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

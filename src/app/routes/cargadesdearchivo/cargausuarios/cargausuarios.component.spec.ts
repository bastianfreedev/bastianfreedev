import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargausuariosComponent } from './cargausuarios.component';

describe('CargausuariosComponent', () => {
  let component: CargausuariosComponent;
  let fixture: ComponentFixture<CargausuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargausuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargausuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

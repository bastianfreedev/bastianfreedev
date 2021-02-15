import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargamasivaderfidComponent } from './cargamasivaderfid.component';

describe('CargamasivaderfidComponent', () => {
  let component: CargamasivaderfidComponent;
  let fixture: ComponentFixture<CargamasivaderfidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargamasivaderfidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargamasivaderfidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

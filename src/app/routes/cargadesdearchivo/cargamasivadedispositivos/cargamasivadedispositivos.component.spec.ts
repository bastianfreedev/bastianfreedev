import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargamasivadedispositivosComponent } from './cargamasivadedispositivos.component';

describe('CargamasivadedispositivosComponent', () => {
  let component: CargamasivadedispositivosComponent;
  let fixture: ComponentFixture<CargamasivadedispositivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargamasivadedispositivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargamasivadedispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

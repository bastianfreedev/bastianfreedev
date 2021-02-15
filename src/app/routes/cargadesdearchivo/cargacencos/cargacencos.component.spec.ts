import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargacencosComponent } from './cargacencos.component';

describe('CargacencosComponent', () => {
  let component: CargacencosComponent;
  let fixture: ComponentFixture<CargacencosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargacencosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargacencosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

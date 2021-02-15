import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaaccesoComponent } from './marcaacceso.component';

describe('MarcaaccesoComponent', () => {
  let component: MarcaaccesoComponent;
  let fixture: ComponentFixture<MarcaaccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaaccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaaccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

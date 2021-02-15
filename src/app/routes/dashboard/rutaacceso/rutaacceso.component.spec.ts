import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaaccesoComponent } from './rutaacceso.component';

describe('RutaaccesoComponent', () => {
  let component: RutaaccesoComponent;
  let fixture: ComponentFixture<RutaaccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaaccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaaccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

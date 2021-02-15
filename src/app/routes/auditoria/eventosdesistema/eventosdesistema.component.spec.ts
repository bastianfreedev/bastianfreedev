import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosdesistemaComponent } from './eventosdesistema.component';

describe('EventosdesistemaComponent', () => {
  let component: EventosdesistemaComponent;
  let fixture: ComponentFixture<EventosdesistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosdesistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosdesistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

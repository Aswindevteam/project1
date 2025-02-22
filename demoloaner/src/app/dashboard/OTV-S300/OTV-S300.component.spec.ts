import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otvs300Component } from './OTV-S300.component';

describe('Otvs300Component', () => {
  let component: Otvs300Component;
  let fixture: ComponentFixture<Otvs300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otvs300Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Otvs300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

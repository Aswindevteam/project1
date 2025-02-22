import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otvs700Component } from './OTV-S700.component';

describe('Otvs700Component', () => {
  let component: Otvs700Component;
  let fixture: ComponentFixture<Otvs700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otvs700Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Otvs700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

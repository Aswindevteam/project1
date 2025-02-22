import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otvs200Component } from './OTV-S200.component';

describe('Otvs200Component', () => {
  let component: Otvs200Component;
  let fixture: ComponentFixture<Otvs200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otvs200Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Otvs200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

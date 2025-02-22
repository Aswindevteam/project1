import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sifh190Component } from './SIF-H190.component';

describe('Sifh190Component', () => {
  let component: Sifh190Component;
  let fixture: ComponentFixture<Sifh190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sifh190Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sifh190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

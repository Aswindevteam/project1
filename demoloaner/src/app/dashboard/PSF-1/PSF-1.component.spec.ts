import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Psf1Component } from './PSF-1.component';

describe('Psf1Component', () => {
  let component: Psf1Component;
  let fixture: ComponentFixture<Psf1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Psf1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Psf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

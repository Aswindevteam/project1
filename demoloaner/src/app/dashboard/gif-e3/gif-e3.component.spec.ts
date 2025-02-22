import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gife3Component } from './gif-e3.component';

describe('Gife3Component', () => {
  let component: Gife3Component;
  let fixture: ComponentFixture<Gife3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gife3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gife3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

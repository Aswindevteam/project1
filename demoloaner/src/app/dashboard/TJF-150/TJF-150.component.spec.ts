import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tjf150Component } from './TJF-150.component';

describe('Tjf150Component', () => {
  let component: Tjf150Component;
  let fixture: ComponentFixture<Tjf150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tjf150Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tjf150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

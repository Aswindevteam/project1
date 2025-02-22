import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENFV4Component } from './enf-v4.component';

describe('ENFV4Component', () => {
  let component: ENFV4Component;
  let fixture: ComponentFixture<ENFV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENFV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ENFV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

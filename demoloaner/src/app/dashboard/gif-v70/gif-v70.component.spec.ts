import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifv70Component } from './gif-v70.component';

describe('Gifv70Component', () => {
  let component: Gifv70Component;
  let fixture: ComponentFixture<Gifv70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifv70Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifv70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

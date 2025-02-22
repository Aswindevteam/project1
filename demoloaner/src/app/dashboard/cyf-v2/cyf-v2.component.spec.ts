import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cyfv2Component } from './cyf-v2.component';

describe('Cyfv2Component', () => {
  let component: Cyfv2Component;
  let fixture: ComponentFixture<Cyfv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cyfv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cyfv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cv150Component } from './cv-150.component';

describe('Cv150Component', () => {
  let component: Cv150Component;
  let fixture: ComponentFixture<Cv150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cv150Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cv150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

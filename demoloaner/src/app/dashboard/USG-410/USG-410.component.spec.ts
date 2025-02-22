import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usg410Component } from './USG-410.component';

describe('Usg410Component', () => {
  let component: Usg410Component;
  let fixture: ComponentFixture<Usg410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usg410Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usg410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

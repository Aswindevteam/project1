import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gf1th190Component } from './gf-1th190.component';

describe('Gf1th190Component', () => {
  let component: Gf1th190Component;
  let fixture: ComponentFixture<Gf1th190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gf1th190Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gf1th190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

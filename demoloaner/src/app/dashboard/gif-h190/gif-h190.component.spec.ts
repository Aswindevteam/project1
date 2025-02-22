import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifh190Component } from './gif-h190.component';

describe('Gifh190Component', () => {
  let component: Gifh190Component;
  let fixture: ComponentFixture<Gifh190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifh190Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifh190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

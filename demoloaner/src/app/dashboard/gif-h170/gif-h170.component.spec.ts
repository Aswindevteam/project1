import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifh170Component } from './gif-h170.component';

describe('Gifh170Component', () => {
  let component: Gifh170Component;
  let fixture: ComponentFixture<Gifh170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifh170Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifh170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giflv1Component } from './gif-lv1.component';

describe('Gifh170Component', () => {
  let component: Giflv1Component;
  let fixture: ComponentFixture<Giflv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Giflv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giflv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

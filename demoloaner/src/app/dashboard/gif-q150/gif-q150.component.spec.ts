import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifQ150Component } from './gif-q150.component';

describe('GifQ150Component', () => {
  let component: GifQ150Component;
  let fixture: ComponentFixture<GifQ150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifQ150Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifQ150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

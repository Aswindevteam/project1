import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifHq190Component } from './gif-hq190.component';

describe('GifHq190Component', () => {
  let component: GifHq190Component;
  let fixture: ComponentFixture<GifHq190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifHq190Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifHq190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifXTQ160Component } from './gif-xtq160.component';

describe('GifXTQ160Component', () => {
  let component: GifXTQ160Component;
  let fixture: ComponentFixture<GifXTQ160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifXTQ160Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifXTQ160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gif1th190Component } from './GIF-1TH190.component';

describe('Gif1th190Component', () => {
  let component: Gif1th190Component;
  let fixture: ComponentFixture<Gif1th190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gif1th190Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gif1th190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

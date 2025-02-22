import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gif2t160Component } from './gif-2t160.component';

describe('Gif2t160Component', () => {
  let component: Gif2t160Component;
  let fixture: ComponentFixture<Gif2t160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gif2t160Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gif2t160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

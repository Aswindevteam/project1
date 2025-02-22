import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gif2th180Component } from './gif-2th180.component';

describe('Gif2th180Component', () => {
  let component: Gif2th180Component;
  let fixture: ComponentFixture<Gif2th180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gif2th180Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gif2th180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

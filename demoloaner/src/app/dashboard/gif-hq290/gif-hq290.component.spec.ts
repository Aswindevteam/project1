import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifhq290Component } from './gif-hq290.component';

describe('Gifhq290Component', () => {
  let component: Gifhq290Component;
  let fixture: ComponentFixture<Gifhq290Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifhq290Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifhq290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

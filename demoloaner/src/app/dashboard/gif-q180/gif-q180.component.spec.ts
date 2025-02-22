import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifq180Component } from './gif-q180.component';

describe('Gifq180Component', () => {
  let component: Gifq180Component;
  let fixture: ComponentFixture<Gifq180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifq180Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifq180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

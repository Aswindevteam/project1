import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifh180Component } from './gif-h180.component';

describe('Gifh180Component', () => {
  let component: Gifh180Component;
  let fixture: ComponentFixture<Gifh180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifh180Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifh180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

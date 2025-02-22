import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifez1500Component } from './gif-ez1500.component';

describe('Gifez1500Component', () => {
  let component: Gifez1500Component;
  let fixture: ComponentFixture<Gifez1500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifez1500Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifez1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

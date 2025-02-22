import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gfuct180Component } from './gf-uct180.component';

describe('Gfuct180Component', () => {
  let component: Gfuct180Component;
  let fixture: ComponentFixture<Gfuct180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gfuct180Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gfuct180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

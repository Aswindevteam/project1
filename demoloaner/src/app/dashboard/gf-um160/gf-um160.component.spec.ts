import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GfUM160Component } from './gf-um160.component';

describe('GfUM160Component', () => {
  let component: GfUM160Component;
  let fixture: ComponentFixture<GfUM160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GfUM160Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GfUM160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

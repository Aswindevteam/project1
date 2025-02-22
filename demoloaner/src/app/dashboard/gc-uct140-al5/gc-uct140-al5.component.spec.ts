import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcUCT140AL5Component } from './gc-uct140-al5.component';

describe('GcUCT140AL5Component', () => {
  let component: GcUCT140AL5Component;
  let fixture: ComponentFixture<GcUCT140AL5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcUCT140AL5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcUCT140AL5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

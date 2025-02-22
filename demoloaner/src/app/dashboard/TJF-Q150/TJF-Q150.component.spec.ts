import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tjfq150Component } from './TJF-Q150.component';

describe('Tjfq150Component', () => {
  let component: Tjfq150Component;
  let fixture: ComponentFixture<Tjfq150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tjfq150Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tjfq150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

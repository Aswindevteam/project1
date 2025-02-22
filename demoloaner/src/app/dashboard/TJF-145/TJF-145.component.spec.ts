import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tjf145Component } from './TJF-145.component';

describe('Tjf145Component', () => {
  let component: Tjf145Component;
  let fixture: ComponentFixture<Tjf145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tjf145Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tjf145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

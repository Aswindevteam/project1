import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gfue190Component } from './GF-UE190.component';

describe('Gfue190Component', () => {
  let component: Gfue190Component;
  let fixture: ComponentFixture<Gfue190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gfue190Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gfue190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

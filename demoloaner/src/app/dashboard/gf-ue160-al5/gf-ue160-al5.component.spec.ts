import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gfue160al5Component } from './gf-ue160-al5.component';

describe('Gfue160al5Component', () => {
  let component: Gfue160al5Component;
  let fixture: ComponentFixture<Gfue160al5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gfue160al5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gfue160al5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

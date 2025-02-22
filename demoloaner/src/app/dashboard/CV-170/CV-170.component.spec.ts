import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cv170Component } from './CV-170.component';

describe('Cv170Component', () => {
  let component: Cv170Component;
  let fixture: ComponentFixture<Cv170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cv170Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cv170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

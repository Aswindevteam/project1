import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sifq180Component } from './SIF-Q180.component';

describe('Sifq180Component', () => {
  let component: Sifq180Component;
  let fixture: ComponentFixture<Sifq180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sifq180Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sifq180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

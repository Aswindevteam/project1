import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pcfph190lComponent } from './PCF-PH190L.component';

describe('Pcfph190lComponent', () => {
  let component: Pcfph190lComponent;
  let fixture: ComponentFixture<Pcfph190lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pcfph190lComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pcfph190lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

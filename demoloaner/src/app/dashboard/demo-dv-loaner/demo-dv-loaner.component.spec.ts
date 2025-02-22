import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDvLoanerComponent } from './demo-dv-loaner.component';

describe('DemoDvLoanerComponent', () => {
  let component: DemoDvLoanerComponent;
  let fixture: ComponentFixture<DemoDvLoanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDvLoanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDvLoanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

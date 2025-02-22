import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfH170lComponent } from './cf-h170l.component';

describe('CfH170lComponent', () => {
  let component: CfH170lComponent;
  let fixture: ComponentFixture<CfH170lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfH170lComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfH170lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

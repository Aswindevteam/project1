import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfH190lComponent } from './cf-h190l.component';

describe('CfH190lComponent', () => {
  let component: CfH190lComponent;
  let fixture: ComponentFixture<CfH190lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfH190lComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfH190lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

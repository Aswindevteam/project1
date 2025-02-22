import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfHq190lComponent } from './cf-hq190l.component';

describe('CfHq190lComponent', () => {
  let component: CfHq190lComponent;
  let fixture: ComponentFixture<CfHq190lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfHq190lComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfHq190lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

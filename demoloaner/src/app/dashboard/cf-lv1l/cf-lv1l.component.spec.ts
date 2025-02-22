import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfLv1lComponent } from './cf-lv1l.component';

describe('CfLv1lComponent', () => {
  let component: CfLv1lComponent;
  let fixture: ComponentFixture<CfLv1lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfLv1lComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfLv1lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfHq290lComponent } from './cf-hq290l.component';

describe('CfHq290lComponent', () => {
  let component: CfHq290lComponent;
  let fixture: ComponentFixture<CfHq290lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfHq290lComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfHq290lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

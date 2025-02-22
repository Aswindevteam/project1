import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfQ150lComponent } from './cf-q150l.component';

describe('CfQ150lComponent', () => {
  let component: CfQ150lComponent;
  let fixture: ComponentFixture<CfQ150lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfQ150lComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfQ150lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

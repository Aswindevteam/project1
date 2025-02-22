import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfV70lComponent } from './cf-v70l.component';

describe('CfV70lComponent', () => {
  let component: CfV70lComponent;
  let fixture: ComponentFixture<CfV70lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfV70lComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfV70lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

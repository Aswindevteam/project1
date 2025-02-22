import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfH290eciComponent } from './cf-h290eci.component';

describe('CfH290eciComponent', () => {
  let component: CfH290eciComponent;
  let fixture: ComponentFixture<CfH290eciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfH290eciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfH290eciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfHq290zlComponent } from './cf-hq290zl.component';

describe('CfHq290zlComponent', () => {
  let component: CfHq290zlComponent;
  let fixture: ComponentFixture<CfHq290zlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfHq290zlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfHq290zlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

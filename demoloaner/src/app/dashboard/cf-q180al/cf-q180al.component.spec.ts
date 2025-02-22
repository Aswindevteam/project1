import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfQ180alComponent } from './cf-q180al.component';

describe('CfQ180alComponent', () => {
  let component: CfQ180alComponent;
  let fixture: ComponentFixture<CfQ180alComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfQ180alComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfQ180alComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

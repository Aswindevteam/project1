import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfH180alComponent } from './cf-h180al.component';

describe('CfH180alComponent', () => {
  let component: CfH180alComponent;
  let fixture: ComponentFixture<CfH180alComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfH180alComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfH180alComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

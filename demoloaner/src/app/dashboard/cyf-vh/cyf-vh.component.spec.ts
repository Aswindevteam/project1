import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyfvhComponent } from './cyf-vh.component';

describe('CyfvhComponent', () => {
  let component: CyfvhComponent;
  let fixture: ComponentFixture<CyfvhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyfvhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyfvhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

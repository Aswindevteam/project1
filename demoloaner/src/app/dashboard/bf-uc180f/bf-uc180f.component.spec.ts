import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfUc180fComponent } from './bf-uc180f.component';

describe('BfUc180fComponent', () => {
  let component: BfUc180fComponent;
  let fixture: ComponentFixture<BfUc180fComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfUc180fComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfUc180fComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

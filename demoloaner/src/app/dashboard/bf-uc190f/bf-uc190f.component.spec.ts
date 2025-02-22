import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfUc190fComponent } from './bf-uc190f.component';

describe('BfUc190fComponent', () => {
  let component: BfUc190fComponent;
  let fixture: ComponentFixture<BfUc190fComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfUc190fComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfUc190fComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

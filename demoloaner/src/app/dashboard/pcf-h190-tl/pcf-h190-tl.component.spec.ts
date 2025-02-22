import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCFH190TLComponent } from './pcf-h190-tl.component';

describe('PCFH190TLComponent', () => {
  let component: PCFH190TLComponent;
  let fixture: ComponentFixture<PCFH190TLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCFH190TLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCFH190TLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

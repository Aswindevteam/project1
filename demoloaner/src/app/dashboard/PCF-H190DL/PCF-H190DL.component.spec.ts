import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pcfh190dlComponent } from './PCF-H190DL.component';

describe('Pcfh190dlComponent', () => {
  let component: Pcfh190dlComponent;
  let fixture: ComponentFixture<Pcfh190dlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pcfh190dlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pcfh190dlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

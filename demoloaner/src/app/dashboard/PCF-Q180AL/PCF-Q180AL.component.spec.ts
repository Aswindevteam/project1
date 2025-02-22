import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pcfq180alComponent } from './PCF-Q180AL.component';

describe('Pcfq180alComponent', () => {
  let component: Pcfq180alComponent;
  let fixture: ComponentFixture<Pcfq180alComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pcfq180alComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pcfq180alComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

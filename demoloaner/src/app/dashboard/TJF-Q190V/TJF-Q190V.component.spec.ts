import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tjfq190vComponent } from './TJF-Q190V.component';

describe('Tjfq190vComponent', () => {
  let component: Tjfq190vComponent;
  let fixture: ComponentFixture<Tjfq190vComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tjfq190vComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tjfq190vComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

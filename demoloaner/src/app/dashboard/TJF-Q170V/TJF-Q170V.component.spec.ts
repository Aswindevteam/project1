import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tjfq170vComponent } from './TJF-Q170V.component';

describe('Tjfq170vComponent', () => {
  let component: Tjfq170vComponent;
  let fixture: ComponentFixture<Tjfq170vComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tjfq170vComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tjfq170vComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sifh290sComponent } from './SIF-H290S.component';

describe('Sifh290sComponent', () => {
  let component: Sifh290sComponent;
  let fixture: ComponentFixture<Sifh290sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sifh290sComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sifh290sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

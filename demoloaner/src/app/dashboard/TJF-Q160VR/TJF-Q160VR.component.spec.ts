import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tjfq160vrComponent } from './TJF-Q160VR.component';

describe('Tjfq160vrComponent', () => {
  let component: Tjfq160vrComponent;
  let fixture: ComponentFixture<Tjfq160vrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tjfq160vrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tjfq160vrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tgfuc180jComponent } from './TGF-UC180J.component';

describe('Tgfuc180jComponent', () => {
  let component: Tgfuc180jComponent;
  let fixture: ComponentFixture<Tgfuc180jComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tgfuc180jComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tgfuc180jComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

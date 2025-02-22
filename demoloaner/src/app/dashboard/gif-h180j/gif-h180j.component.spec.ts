import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifh180jComponent } from './gif-h180j.component';

describe('Gifh180jComponent', () => {
  let component: Gifh180jComponent;
  let fixture: ComponentFixture<Gifh180jComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifh180jComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifh180jComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

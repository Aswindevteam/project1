import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tjfq160rComponent } from './TJF-Q160R.component';

describe('Tjfq160rComponent', () => {
  let component: Tjfq160rComponent;
  let fixture: ComponentFixture<Tjfq160rComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tjfq160rComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tjfq160rComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

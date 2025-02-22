import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ART10EComponent } from './ar-t10-e.component';

describe('ART10EComponent', () => {
  let component: ART10EComponent;
  let fixture: ComponentFixture<ART10EComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ART10EComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ART10EComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArT12EComponent } from './ar-t12-e.component';

describe('ArT12EComponent', () => {
  let component: ArT12EComponent;
  let fixture: ComponentFixture<ArT12EComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArT12EComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArT12EComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

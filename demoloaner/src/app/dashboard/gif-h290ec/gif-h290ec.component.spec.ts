import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifh290ecComponent } from './gif-h290ec.component';

describe('Gifh290ecComponent', () => {
  let component: Gifh290ecComponent;
  let fixture: ComponentFixture<Gifh290ecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifh290ecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifh290ecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

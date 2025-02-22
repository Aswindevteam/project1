import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TjfQ180vComponent } from './tjf-q180v.component';

describe('TjfQ180vComponent', () => {
  let component: TjfQ180vComponent;
  let fixture: ComponentFixture<TjfQ180vComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TjfQ180vComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TjfQ180vComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

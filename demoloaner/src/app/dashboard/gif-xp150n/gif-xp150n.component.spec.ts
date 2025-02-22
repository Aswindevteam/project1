import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifxp150nComponent } from './gif-xp150n.component';

describe('Gifxp150nComponent', () => {
  let component: Gifxp150nComponent;
  let fixture: ComponentFixture<Gifxp150nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifxp150nComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifxp150nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

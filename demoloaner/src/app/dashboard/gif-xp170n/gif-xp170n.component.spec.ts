import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifxp170nComponent } from './gif-xp170n.component';

describe('Gifxp170nComponent', () => {
  let component: Gifxp170nComponent;
  let fixture: ComponentFixture<Gifxp170nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifxp170nComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifxp170nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

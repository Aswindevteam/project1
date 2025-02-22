import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifxp180nComponent } from './gif-xp180n.component';

describe('Gifxp180nComponent', () => {
  let component: Gifxp180nComponent;
  let fixture: ComponentFixture<Gifxp180nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifxp180nComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifxp180nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

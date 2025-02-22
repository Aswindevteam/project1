import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifxp190nComponent } from './gif-xp190n.component';

describe('Gifxp190nComponent', () => {
  let component: Gifxp190nComponent;
  let fixture: ComponentFixture<Gifxp190nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifxp190nComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifxp190nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

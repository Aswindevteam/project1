import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifh290zComponent } from './gif-h290z.component';

describe('Gifh290zComponent', () => {
  let component: Gifh290zComponent;
  let fixture: ComponentFixture<Gifh290zComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifh290zComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifh290zComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

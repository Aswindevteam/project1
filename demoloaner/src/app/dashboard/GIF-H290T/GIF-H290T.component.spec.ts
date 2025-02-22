import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifh290tComponent } from './GIF-H290T.component';

describe('Gifh290tComponent', () => {
  let component: Gifh290tComponent;
  let fixture: ComponentFixture<Gifh290tComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifh290tComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifh290tComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

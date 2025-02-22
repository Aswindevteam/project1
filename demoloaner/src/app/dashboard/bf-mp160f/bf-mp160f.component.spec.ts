import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfMp160fComponent } from './bf-mp160f.component';

describe('BfMp160fComponent', () => {
  let component: BfMp160fComponent;
  let fixture: ComponentFixture<BfMp160fComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfMp160fComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfMp160fComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

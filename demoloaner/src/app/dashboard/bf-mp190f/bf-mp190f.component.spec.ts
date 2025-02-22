import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfMp190fComponent } from './bf-mp190f.component';

describe('BfMp190fComponent', () => {
  let component: BfMp190fComponent;
  let fixture: ComponentFixture<BfMp190fComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfMp190fComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfMp190fComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChfB290Component } from './chf-b290.component';
describe('ChfB290Component', () => {
    let component: ChfB290Component;
    let fixture: ComponentFixture<ChfB290Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ChfB290Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(ChfB290Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

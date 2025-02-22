import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfXP60Component } from './bf-xp60.component';
describe('BfXP60Component', () => {
    let component: BfXP60Component;
    let fixture: ComponentFixture<BfXP60Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfXP60Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfXP60Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

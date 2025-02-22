import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfP150Component } from './bf-p150.component';
describe('BfP150Component', () => {
    let component: BfP150Component;
    let fixture: ComponentFixture<BfP150Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfP150Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfP150Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfQ190Component } from './bf-q190.component';
describe('BfQ190Component', () => {
    let component: BfQ190Component;
    let fixture: ComponentFixture<BfQ190Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfQ190Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfQ190Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

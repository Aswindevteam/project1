import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfTE2Component } from './bf-te2.component';
describe('BfTE2Component', () => {
    let component: BfTE2Component;
    let fixture: ComponentFixture<BfTE2Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfTE2Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfTE2Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

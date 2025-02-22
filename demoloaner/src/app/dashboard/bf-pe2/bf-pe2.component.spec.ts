import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfPE2Component } from './bf-pe2.component';
describe('Bf1tq180Component', () => {
    let component: BfPE2Component;
    let fixture: ComponentFixture<BfPE2Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfPE2Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfPE2Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

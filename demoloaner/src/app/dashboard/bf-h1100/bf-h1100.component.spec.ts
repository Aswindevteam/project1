import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfH1100Component } from './bf-h1100.component';
describe('BfH190Component', () => {
    let component: BfH1100Component;
    let fixture: ComponentFixture<BfH1100Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfH1100Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfH1100Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

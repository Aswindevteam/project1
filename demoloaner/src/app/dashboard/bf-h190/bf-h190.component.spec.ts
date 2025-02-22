import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfH190Component } from './bf-h190.component';
describe('BfH190Component', () => {
    let component: BfH190Component;
    let fixture: ComponentFixture<BfH190Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfH190Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfH190Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

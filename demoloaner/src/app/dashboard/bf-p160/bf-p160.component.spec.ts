import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfP160Component } from './bf-p160.component';
describe('BfP160Component', () => {
    let component: BfP160Component;
    let fixture: ComponentFixture<BfP160Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfP160Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfP160Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

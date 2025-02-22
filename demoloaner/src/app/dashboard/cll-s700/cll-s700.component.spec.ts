import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CLLs700Component } from './cll-s700.component';
describe('CLLs700Component', () => {
    let component: CLLs700Component;
    let fixture: ComponentFixture<CLLs700Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ CLLs700Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(CLLs700Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

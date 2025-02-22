import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chfv2Component } from './chf-v2.component';
describe('Chfv2Component', () => {
    let component: Chfv2Component;
    let fixture: ComponentFixture<Chfv2Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Chfv2Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Chfv2Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bf1th1100Component } from './bf-1th1100.component';
describe('Bf1th1100Component', () => {
    let component: Bf1th1100Component;
    let fixture: ComponentFixture<Bf1th1100Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Bf1th1100Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Bf1th1100Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bf1t60Component } from './bf-1t60.component';
describe('Bf1t60Component', () => {
    let component: Bf1t60Component;
    let fixture: ComponentFixture<Bf1t60Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Bf1t60Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Bf1t60Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cvv1Component } from './CV-V1.component';
describe('Cvv1Component', () => {
    let component: Cvv1Component;
    let fixture: ComponentFixture<Cvv1Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Cvv1Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Cvv1Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

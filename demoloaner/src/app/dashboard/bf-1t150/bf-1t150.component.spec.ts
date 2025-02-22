import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bf1t150Component } from './bf-1t150.component';
describe('Bf1t150Component', () => {
    let component: Bf1t150Component;
    let fixture: ComponentFixture<Bf1t150Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Bf1t150Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Bf1t150Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

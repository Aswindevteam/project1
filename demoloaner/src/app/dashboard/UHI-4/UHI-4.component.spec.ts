import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Uhi4Component } from './UHI-4.component';
describe('Uhi4Component', () => {
    let component: Uhi4Component;
    let fixture: ComponentFixture<Uhi4Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Uhi4Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Uhi4Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

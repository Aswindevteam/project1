import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ues40Component } from './UES-40.component';
describe('Ues40Component', () => {
    let component: Ues40Component;
    let fixture: ComponentFixture<Ues40Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Ues40Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Ues40Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

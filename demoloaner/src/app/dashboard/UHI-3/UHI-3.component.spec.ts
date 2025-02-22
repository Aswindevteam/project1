import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Uhi3Component } from './UHI-3.component';
describe('Uhi3Component', () => {
    let component: Uhi3Component;
    let fixture: ComponentFixture<Uhi3Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Uhi3Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Uhi3Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

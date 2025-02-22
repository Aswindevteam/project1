import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Otvs400Component } from './OTV-S400.component';
describe('Otvs400Component', () => {
    let component: Otvs400Component;
    let fixture: ComponentFixture<Otvs400Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Otvs400Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Otvs400Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

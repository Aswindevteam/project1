import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Otvs190Component } from './OTV-S190.component';
describe('Otvs190Component', () => {
    let component: Otvs190Component;
    let fixture: ComponentFixture<Otvs190Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Otvs190Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Otvs190Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

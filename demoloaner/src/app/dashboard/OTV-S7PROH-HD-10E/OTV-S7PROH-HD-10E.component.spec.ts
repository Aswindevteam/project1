import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Otvs7prohhd10ecomponent } from './OTV-S7PROH-HD-10E.component';
describe('Otvs7prohhd10ecomponent', () => {
    let component: Otvs7prohhd10ecomponent;
    let fixture: ComponentFixture<Otvs7prohhd10ecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Otvs7prohhd10ecomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Otvs7prohhd10ecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

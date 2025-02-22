import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Otvs7prohhd12ecomponent } from './OTV-S7PROH-HD-12E.component';
describe('Otvs7prohhd12ecomponent', () => {
    let component: Otvs7prohhd12ecomponent;
    let fixture: ComponentFixture<Otvs7prohhd12ecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Otvs7prohhd12ecomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Otvs7prohhd12ecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

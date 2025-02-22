import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Otvs7prohhdl08ecomponent } from './OTV-S7PROH-HD-L08E.component';
describe('Otvs7prohhdl08ecomponent', () => {
    let component: Otvs7prohhdl08ecomponent;
    let fixture: ComponentFixture<Otvs7prohhdl08ecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Otvs7prohhdl08ecomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Otvs7prohhdl08ecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

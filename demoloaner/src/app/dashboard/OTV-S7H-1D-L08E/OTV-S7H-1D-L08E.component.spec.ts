import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Otvs7h1dl08ecomponent } from './OTV-S7H-1D-L08E.component';
describe('Otvs7h1dl08ecomponent', () => {
    let component: Otvs7h1dl08ecomponent;
    let fixture: ComponentFixture<Otvs7h1dl08ecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Otvs7h1dl08ecomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Otvs7h1dl08ecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

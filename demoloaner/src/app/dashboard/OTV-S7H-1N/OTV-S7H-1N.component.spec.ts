import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Otvs7h1ncomponent } from './OTV-S7H-1N.component';
describe('Otvs7h1ncomponent', () => {
    let component: Otvs7h1ncomponent;
    let fixture: ComponentFixture<Otvs7h1ncomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Otvs7h1ncomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Otvs7h1ncomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Telescopecomponent } from './TELESCOPE.component';
describe('Telescopecomponent', () => {
    let component: Telescopecomponent;
    let fixture: ComponentFixture<Telescopecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Telescopecomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Telescopecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

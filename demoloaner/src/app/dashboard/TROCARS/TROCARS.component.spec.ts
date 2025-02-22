import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Trocarscomponent } from './TROCARS.component';
describe('Trocarscomponentt', () => {
    let component: Trocarscomponent;
    let fixture: ComponentFixture<Trocarscomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Trocarscomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Trocarscomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

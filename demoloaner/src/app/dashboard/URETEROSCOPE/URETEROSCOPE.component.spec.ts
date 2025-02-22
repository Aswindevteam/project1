import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ureteroscopecomponent } from './URETEROSCOPE.component';
describe('Ureteroscopecomponent', () => {
    let component: Ureteroscopecomponent;
    let fixture: ComponentFixture<Ureteroscopecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Ureteroscopecomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Ureteroscopecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

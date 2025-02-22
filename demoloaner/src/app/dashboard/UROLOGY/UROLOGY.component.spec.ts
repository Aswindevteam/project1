import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Urologycomponent } from './UROLOGY.component';
describe('Urologycomponentt', () => {
    let component: Urologycomponent;
    let fixture: ComponentFixture<Urologycomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Urologycomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Urologycomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

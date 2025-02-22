import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Probedrivingunitcomponent } from './PROBE_DRIVING_UNIT.component';
describe('Probedrivingunitcomponentt', () => {
    let component: Probedrivingunitcomponent;
    let fixture: ComponentFixture<Probedrivingunitcomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Probedrivingunitcomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Probedrivingunitcomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

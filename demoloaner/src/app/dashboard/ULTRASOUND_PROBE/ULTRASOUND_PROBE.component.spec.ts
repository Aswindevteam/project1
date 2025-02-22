import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ultrasoundprobecomponent } from './ULTRASOUND_PROBE.component';
describe('Ultrasoundprobecomponentt', () => {
    let component: Ultrasoundprobecomponent;
    let fixture: ComponentFixture<Ultrasoundprobecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Ultrasoundprobecomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Ultrasoundprobecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

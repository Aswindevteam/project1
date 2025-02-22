import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ultrasoundkeyboardcomponent } from './ULTRASOUND_KEYBOARD.component';
describe('Ultrasoundkeyboardcomponentt', () => {
    let component: Ultrasoundkeyboardcomponent;
    let fixture: ComponentFixture<Ultrasoundkeyboardcomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Ultrasoundkeyboardcomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Ultrasoundkeyboardcomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

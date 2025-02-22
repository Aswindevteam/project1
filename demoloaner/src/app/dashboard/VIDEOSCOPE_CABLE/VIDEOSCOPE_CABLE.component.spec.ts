import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Videoscopecablecomponent } from './VIDEOSCOPE_CABLE.component';
describe('Videoscopecablecomponentt', () => {
    let component: Videoscopecablecomponent;
    let fixture: ComponentFixture<Videoscopecablecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Videoscopecablecomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Videoscopecablecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

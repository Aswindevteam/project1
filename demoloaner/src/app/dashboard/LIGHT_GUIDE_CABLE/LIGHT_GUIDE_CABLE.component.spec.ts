import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lgcablecomponent } from './LIGHT_GUIDE_CABLE.component';
describe('Lgcablecomponentt', () => {
    let component: Lgcablecomponent;
    let fixture: ComponentFixture<Lgcablecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Lgcablecomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Lgcablecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Opticalforcepscomponent } from './OPTICAL_FORCEPS.component';
describe('Opticalforcepscomponent', () => {
    let component: Opticalforcepscomponent;
    let fixture: ComponentFixture<Opticalforcepscomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Opticalforcepscomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Opticalforcepscomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

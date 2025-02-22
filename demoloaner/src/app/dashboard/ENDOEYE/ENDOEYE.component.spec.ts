import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Endoeyecomponent } from './ENDOEYE.component';
describe('Endoeyecomponentt', () => {
    let component: Endoeyecomponent;
    let fixture: ComponentFixture<Endoeyecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Endoeyecomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Endoeyecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

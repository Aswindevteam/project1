import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hysteroflowcomponent } from './HYSTERO_FLOW.component';
describe('Hysteroflowcomponentt', () => {
    let component: Hysteroflowcomponent;
    let fixture: ComponentFixture<Hysteroflowcomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Hysteroflowcomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Hysteroflowcomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

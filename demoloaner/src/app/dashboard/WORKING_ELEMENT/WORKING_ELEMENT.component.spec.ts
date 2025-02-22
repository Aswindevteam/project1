import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Workingelementcomponent } from './WORKING_ELEMENT.component';
describe('Workingelementcomponentt', () => {
    let component: Workingelementcomponent;
    let fixture: ComponentFixture<Workingelementcomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Workingelementcomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Workingelementcomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

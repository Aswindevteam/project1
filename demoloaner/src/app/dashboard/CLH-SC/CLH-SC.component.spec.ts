import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clhsccomponent } from './CLH-SC.component';
describe('Clhsccomponent', () => {
    let component: Clhsccomponent;
    let fixture: ComponentFixture<Clhsccomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Clhsccomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Clhsccomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

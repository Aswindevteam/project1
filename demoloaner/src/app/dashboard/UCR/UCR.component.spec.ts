import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ucrcomponent } from './UCR.component';
describe('Ucrcomponent', () => {
    let component: Ucrcomponent;
    let fixture: ComponentFixture<Ucrcomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Ucrcomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Ucrcomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

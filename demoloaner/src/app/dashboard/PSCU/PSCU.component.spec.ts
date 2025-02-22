import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pscucomponent } from './PSCU.component';
describe('Pscucomponent', () => {
    let component: Pscucomponent;
    let fixture: ComponentFixture<Pscucomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Pscucomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Pscucomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hfcablecomponent } from './HF_CABLE.component';
describe('Hfcablecomponentt', () => {
    let component: Hfcablecomponent;
    let fixture: ComponentFixture<Hfcablecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Hfcablecomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Hfcablecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

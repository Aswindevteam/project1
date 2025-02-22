import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leakagetestercomponent } from './LEAKAGE_TESTER.component';
describe('Leakagetestercomponentt', () => {
    let component: Leakagetestercomponent;
    let fixture: ComponentFixture<Leakagetestercomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Leakagetestercomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Leakagetestercomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

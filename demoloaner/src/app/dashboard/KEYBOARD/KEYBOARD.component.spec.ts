import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  Keyboardcomponent } from './KEYBOARD.component';
describe(' Keyboardcomponentt', () => {
    let component:  Keyboardcomponent;
    let fixture: ComponentFixture< Keyboardcomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [  Keyboardcomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent( Keyboardcomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

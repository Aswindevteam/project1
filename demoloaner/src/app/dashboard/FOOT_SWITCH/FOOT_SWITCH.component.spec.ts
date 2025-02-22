import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  Footswitchcomponent } from './FOOT_SWITCH.component';
describe(' Footswitchcomponentt', () => {
    let component:  Footswitchcomponent;
    let fixture: ComponentFixture< Footswitchcomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [  Footswitchcomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent( Footswitchcomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Otvsccomponent } from './OTV-SC.component';
describe('Otvsccomponent', () => {
    let component: Otvsccomponent;
    let fixture: ComponentFixture<Otvsccomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Otvsccomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Otvsccomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

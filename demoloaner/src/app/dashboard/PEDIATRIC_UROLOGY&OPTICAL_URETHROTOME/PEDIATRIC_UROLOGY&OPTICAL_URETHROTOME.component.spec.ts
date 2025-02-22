import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pediatriccomponent } from './PEDIATRIC_UROLOGY&OPTICAL_URETHROTOME.component';
describe('Pediatriccomponent', () => {
    let component: Pediatriccomponent;
    let fixture: ComponentFixture<Pediatriccomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Pediatriccomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Pediatriccomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

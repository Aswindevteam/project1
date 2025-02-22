import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Monitorcomponent } from './MONITOR.component';
describe('Monitorcomponentt', () => {
    let component: Monitorcomponent;
    let fixture: ComponentFixture<Monitorcomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Monitorcomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Monitorcomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

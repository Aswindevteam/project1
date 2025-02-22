import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Splgcomponent } from './SPL-G.component';
describe('Splgcomponent', () => {
    let component: Splgcomponent;
    let fixture: ComponentFixture<Splgcomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Splgcomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Splgcomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Otvsc2component } from './OTV-SC2.component';
describe('Otvsc2component', () => {
    let component: Otvsc2component;
    let fixture: ComponentFixture<Otvsc2component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Otvsc2component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Otvsc2component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

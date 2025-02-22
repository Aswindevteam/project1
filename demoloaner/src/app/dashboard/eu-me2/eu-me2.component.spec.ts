import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eume2component } from './eu-me2.component';
describe('Eume2component', () => {
    let component: Eume2component;
    let fixture: ComponentFixture<Eume2component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Eume2component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Eume2component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

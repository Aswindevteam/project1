import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eume1Component } from './eu-me1.component';
describe('Eume1Component', () => {
    let component: Eume1Component;
    let fixture: ComponentFixture<Eume1Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Eume1Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Eume1Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eume3Component } from './EU-ME3.component';
describe('Eume3Component', () => {
    let component: Eume3Component;
    let fixture: ComponentFixture<Eume3Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Eume3Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Eume3Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

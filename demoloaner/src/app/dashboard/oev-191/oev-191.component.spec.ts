import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Oev191Component } from './oev-191.component';
describe('Oev191Component', () => {
    let component: Oev191Component;
    let fixture: ComponentFixture<Oev191Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Oev191Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Oev191Component);
      component = fixture.componentInstance
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

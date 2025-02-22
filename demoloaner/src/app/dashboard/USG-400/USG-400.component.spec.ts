import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usg400Component } from './USG-400.component';
describe('Usg400Component', () => {
    let component: Usg400Component;
    let fixture: ComponentFixture<Usg400Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Usg400Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Usg400Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

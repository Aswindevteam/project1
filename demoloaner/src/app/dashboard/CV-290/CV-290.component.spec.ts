import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cv290Component } from './CV-290.component';
describe('Cv290Component', () => {
    let component: Cv290Component;
    let fixture: ComponentFixture<Cv290Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Cv290Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Cv290Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

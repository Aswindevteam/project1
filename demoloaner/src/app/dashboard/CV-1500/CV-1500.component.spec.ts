import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cv1500Component } from './CV-1500.component';
describe('Cv1500Component', () => {
    let component: Cv1500Component;
    let fixture: ComponentFixture<Cv1500Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Cv1500Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Cv1500Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

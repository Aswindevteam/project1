import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cv180Component } from './CV-180.component';
describe('Cv180Component', () => {
    let component: Cv180Component;
    let fixture: ComponentFixture<Cv180Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Cv180Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Cv180Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

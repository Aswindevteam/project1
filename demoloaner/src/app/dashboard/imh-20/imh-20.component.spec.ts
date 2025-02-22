import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Imh20Component } from './imh-20.component';
describe('Imh20Component', () => {
    let component: Imh20Component;
    let fixture: ComponentFixture<Imh20Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Imh20Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Imh20Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

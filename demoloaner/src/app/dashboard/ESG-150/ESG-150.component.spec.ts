import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Esg150component } from './ESG-150.component';
describe('Esg150component', () => {
    let component: Esg150component;
    let fixture: ComponentFixture<Esg150component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Esg150component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Esg150component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

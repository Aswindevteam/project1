import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Esg400component } from './ESG-400.component';
describe('Esg400component', () => {
    let component: Esg400component;
    let fixture: ComponentFixture<Esg400component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Esg400component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Esg400component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

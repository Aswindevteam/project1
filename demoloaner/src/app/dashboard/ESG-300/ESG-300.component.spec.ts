import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Esg300component } from './ESG-300.component';
describe('Esg300component', () => {
    let component: Esg300component;
    let fixture: ComponentFixture<Esg300component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Esg300component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Esg300component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

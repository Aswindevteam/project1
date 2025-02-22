import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Esg100component } from './ESG-100.component';
describe('Esg100component', () => {
    let component: Esg100component;
    let fixture: ComponentFixture<Esg100component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Esg100component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Esg100component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

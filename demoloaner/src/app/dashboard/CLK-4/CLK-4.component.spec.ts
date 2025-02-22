import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clk4component } from './CLK-4.component';
describe('Clk4component', () => {
    let component: Clk4component;
    let fixture: ComponentFixture<Clk4component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Clk4component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Clk4component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

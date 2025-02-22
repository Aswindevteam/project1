import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mu1component } from './MU1.component';
describe('Mu1componentt', () => {
    let component: Mu1component;
    let fixture: ComponentFixture<Mu1component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Mu1component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Mu1component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

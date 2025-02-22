import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Oip1component } from './OIP-1.component';
describe('Oip1component', () => {
    let component: Oip1component;
    let fixture: ComponentFixture<Oip1component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Oip1component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Oip1component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

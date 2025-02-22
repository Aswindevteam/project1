import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clh250component } from './CLH-250.component';
describe('Clh250component', () => {
    let component: Clh250component;
    let fixture: ComponentFixture<Clh250component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Clh250component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Clh250component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

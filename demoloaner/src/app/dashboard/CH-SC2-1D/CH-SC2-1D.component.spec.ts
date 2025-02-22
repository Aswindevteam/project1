import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chsc21dComponent } from './CH-SC2-1D.component';
describe('Chsc21dComponent', () => {
    let component: Chsc21dComponent;
    let fixture: ComponentFixture<Chsc21dComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Chsc21dComponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Chsc21dComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

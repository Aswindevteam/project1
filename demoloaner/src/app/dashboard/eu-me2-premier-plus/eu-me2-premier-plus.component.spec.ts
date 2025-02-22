import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eume2premierplusComponent } from './eu-me2-premier-plus.component';
describe('Eume2premierplusComponent', () => {
    let component: Eume2premierplusComponent;
    let fixture: ComponentFixture<Eume2premierplusComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Eume2premierplusComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Eume2premierplusComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

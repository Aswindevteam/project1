import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eume2premierComponent } from './eu-me2-premier.component';
describe('Eume2premierComponent', () => {
    let component: Eume2premierComponent;
    let fixture: ComponentFixture<Eume2premierComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Eume2premierComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Eume2premierComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

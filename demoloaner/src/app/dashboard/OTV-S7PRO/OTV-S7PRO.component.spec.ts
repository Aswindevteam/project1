import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Otvs7proComponent } from './OTV-S7PRO.component';
describe('Otvs7proComponent', () => {
    let component: Otvs7proComponent;
    let fixture: ComponentFixture<Otvs7proComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Otvs7proComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Otvs7proComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

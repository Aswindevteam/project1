import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Oev262hComponent } from './oev-262h.component';
describe('Oev262hComponent', () => {
    let component: Oev262hComponent;
    let fixture: ComponentFixture<Oev262hComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Oev262hComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Oev262hComponent);
      component = fixture.componentInstance
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Oev321uhComponent } from './oev-321uh.component';
describe('Oev321uhComponent', () => {
    let component: Oev321uhComponent;
    let fixture: ComponentFixture<Oev321uhComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Oev321uhComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Oev321uhComponent);
      component = fixture.componentInstance
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

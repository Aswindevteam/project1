import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Oev191hComponent } from './oev-191h.component';
describe('Oev191hComponent', () => {
    let component: Oev191hComponent;
    let fixture: ComponentFixture<Oev191hComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Oev191hComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Oev191hComponent);
      component = fixture.componentInstance
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Oev261hComponent } from './oev-261h.component';
describe('Oev261hComponent', () => {
    let component: Oev261hComponent;
    let fixture: ComponentFixture<Oev261hComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Oev261hComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Oev261hComponent);
      component = fixture.componentInstance
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bf3C160Component } from './bf-3c160.component';
describe('Bf3C160Component', () => {
    let component: Bf3C160Component;
    let fixture: ComponentFixture<Bf3C160Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Bf3C160Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Bf3C160Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

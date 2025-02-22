import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bf3C40Component } from './bf-3c40.component';
describe('Bf1tq180Component', () => {
    let component: Bf3C40Component;
    let fixture: ComponentFixture<Bf3C40Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Bf3C40Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Bf3C40Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

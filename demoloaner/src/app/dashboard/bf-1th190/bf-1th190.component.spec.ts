import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bf1th190Component } from './bf-1th190.component';
describe('Bf1th190Component', () => {
    let component: Bf1th190Component;
    let fixture: ComponentFixture<Bf1th190Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Bf1th190Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Bf1th190Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

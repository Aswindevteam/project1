import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clv190Component } from './CLV-190.component';
describe('Clv190Component', () => {
    let component: Clv190Component;
    let fixture: ComponentFixture<Clv190Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Clv190Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Clv190Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

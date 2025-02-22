import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lft160Component } from './ltf-160.component';
describe('Lft160Component', () => {
    let component: Lft160Component;
    let fixture: ComponentFixture<Lft160Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Lft160Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Lft160Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

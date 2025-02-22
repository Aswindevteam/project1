import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clv180Component } from './CLV-180.component';
describe('Clv180Component', () => {
    let component: Clv180Component;
    let fixture: ComponentFixture<Clv180Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Clv180Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Clv180Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

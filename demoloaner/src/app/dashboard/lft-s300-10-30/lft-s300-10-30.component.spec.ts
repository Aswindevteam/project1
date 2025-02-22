import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lfts3001030Component } from './lft-s300-10-30.component';
describe('Lfts3001030Component', () => {
    let component: Lfts3001030Component;
    let fixture: ComponentFixture<Lfts3001030Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Lfts3001030Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Lfts3001030Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

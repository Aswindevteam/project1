import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bf1tq170Component } from './bf-1tq170.component';

describe('BBF-1TQ170Component', () => {
    let component: Bf1tq170Component;
    let fixture: ComponentFixture<Bf1tq170Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Bf1tq170Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Bf1tq170Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

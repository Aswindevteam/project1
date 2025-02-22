import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Upd3Component } from './UPD-3.component';
describe('Cvv1Component', () => {
    let component:Upd3Component;
    let fixture: ComponentFixture<Cvv1Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [Upd3Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Cvv1Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

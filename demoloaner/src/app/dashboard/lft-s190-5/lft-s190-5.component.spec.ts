import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lfts1905Component } from './lft-s190-5.component';
describe('Lfts1905Component', () => {
    let component: Lfts1905Component;
    let fixture: ComponentFixture<Lfts1905Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Lfts1905Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Lfts1905Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

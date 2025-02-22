import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  Urfp5Component } from './URF-P5.component';
describe(' Urfp5Component', () => {
    let component:  Urfp5Component;
    let fixture: ComponentFixture< Urfp5Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [  Urfp5Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent( Urfp5Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

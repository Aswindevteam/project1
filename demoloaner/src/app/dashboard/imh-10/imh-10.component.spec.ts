import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Imh10Component } from './imh-10.component';
describe('Imh10Component', () => {
    let component: Imh10Component;
    let fixture: ComponentFixture<Imh10Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Imh10Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Imh10Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

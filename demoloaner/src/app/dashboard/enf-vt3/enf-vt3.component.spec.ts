import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Enfvt3Component } from './enf-vt3.component';
describe('Enfvt3Component', () => {
    let component: Enfvt3Component;
    let fixture: ComponentFixture<Enfvt3Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Enfvt3Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Enfvt3Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

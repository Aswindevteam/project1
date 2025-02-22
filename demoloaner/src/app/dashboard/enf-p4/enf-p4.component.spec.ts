import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Enfp4Component } from './enf-p4.component';
describe('Enfp4Component', () => {
    let component: Enfp4Component;
    let fixture: ComponentFixture<Enfp4Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Enfp4Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Enfp4Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

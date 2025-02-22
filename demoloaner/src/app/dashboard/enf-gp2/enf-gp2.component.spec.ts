import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Enfgp2Component } from './enf-gp2.component';
describe('EnfgpComponent', () => {
    let component: Enfgp2Component;
    let fixture: ComponentFixture<Enfgp2Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Enfgp2Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Enfgp2Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ofp2Component } from './ofp-2.component';
describe('Ofp2Component', () => {
    let component: Ofp2Component;
    let fixture: ComponentFixture<Ofp2Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Ofp2Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Ofp2Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

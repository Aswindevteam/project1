import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfT3Component } from './enf-t3.component';
describe('EnfT3Component', () => {
    let component: EnfT3Component;
    let fixture: ComponentFixture<EnfT3Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ EnfT3Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(EnfT3Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

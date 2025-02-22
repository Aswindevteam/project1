import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfV3Component } from './enf-v3.component';
describe('EnfV3Component', () => {
    let component: EnfV3Component;
    let fixture: ComponentFixture<EnfV3Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ EnfV3Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(EnfV3Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfVh2Component } from './enf-vh2.component';
describe('EnfVh2Component', () => {
    let component: EnfVh2Component;
    let fixture: ComponentFixture<EnfVh2Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ EnfVh2Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(EnfVh2Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

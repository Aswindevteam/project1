import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfgpComponent } from './enf-gp.component';
describe('EnfgpComponent', () => {
    let component: EnfgpComponent;
    let fixture: ComponentFixture<EnfgpComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ EnfgpComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(EnfgpComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

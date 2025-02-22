import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LfgpComponent } from './lf-gp.component';
describe('LfgpComponent', () => {
    let component: LfgpComponent;
    let fixture: ComponentFixture<LfgpComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ LfgpComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(LfgpComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

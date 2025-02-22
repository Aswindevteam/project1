import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LftvpComponent } from './lft-vp.component';
describe('LftvpComponent', () => {
    let component: LftvpComponent;
    let fixture: ComponentFixture<LftvpComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ LftvpComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(LftvpComponent);
      component = fixture.componentInstance
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

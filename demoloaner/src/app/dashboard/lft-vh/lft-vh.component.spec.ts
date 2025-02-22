import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LftvhComponent } from './lft-vh.component';
describe('LftvhComponent', () => {
    let component: LftvhComponent;
    let fixture: ComponentFixture<LftvhComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ LftvhComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(LftvhComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

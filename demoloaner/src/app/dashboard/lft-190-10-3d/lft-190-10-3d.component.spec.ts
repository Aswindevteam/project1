import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lft190103dComponent } from './lft-190-10-3d.component';
describe('Lft190103dComponent', () => {
    let component: Lft190103dComponent;
    let fixture: ComponentFixture<Lft190103dComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Lft190103dComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Lft190103dComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

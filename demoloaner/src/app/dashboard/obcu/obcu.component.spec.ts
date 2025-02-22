import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObcuComponent } from './obcu.component';
describe('ObcuComponent', () => {
    let component: ObcuComponent;
    let fixture: ComponentFixture<ObcuComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ObcuComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(ObcuComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

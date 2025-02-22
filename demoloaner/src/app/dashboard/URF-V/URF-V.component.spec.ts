import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrfvComponent } from './URF-V.component';
describe('UrfvComponent', () => {
    let component: UrfvComponent;
    let fixture: ComponentFixture<UrfvComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ UrfvComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(UrfvComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

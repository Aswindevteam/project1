import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UhieComponent } from './UHI-E.component';
describe('UhieComponent', () => {
    let component: UhieComponent;
    let fixture: ComponentFixture<UhieComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ UhieComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(UhieComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

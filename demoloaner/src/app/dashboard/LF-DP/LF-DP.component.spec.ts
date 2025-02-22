import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LfdpComponent } from './LF-DP.component';
describe('LfdpComponent', () => {
    let component: LfdpComponent;
    let fixture: ComponentFixture<LfdpComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ LfdpComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(LfdpComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CLVS40PROComponent } from './CLV-S40-PRO.component';
describe('CLVS40PROComponent', () => {
    let component: CLVS40PROComponent;
    let fixture: ComponentFixture<CLVS40PROComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ CLVS40PROComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(CLVS40PROComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

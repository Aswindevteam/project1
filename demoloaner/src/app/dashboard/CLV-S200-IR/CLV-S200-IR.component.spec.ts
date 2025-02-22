import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clvs200irComponent } from './CLV-S200-IR.component';
describe('Clvs200irComponent', () => {
    let component: Clvs200irComponent;
    let fixture: ComponentFixture<Clvs200irComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Clvs200irComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Clvs200irComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

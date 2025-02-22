import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CFEZ1500DLComponent } from './cf-ez1500dl.component';
describe('CFEZ1500DLComponent', () => {
    let component: CFEZ1500DLComponent;
    let fixture: ComponentFixture<CFEZ1500DLComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ CFEZ1500DLComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(CFEZ1500DLComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

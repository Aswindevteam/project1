import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfVhComponent } from './enf-vh.component';
describe('EnfVhComponent', () => {
    let component: EnfVhComponent;
    let fixture: ComponentFixture<EnfVhComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ EnfVhComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(EnfVhComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

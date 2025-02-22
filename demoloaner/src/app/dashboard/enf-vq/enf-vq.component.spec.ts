import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfVqComponent } from './enf-vq.component';
describe('EnfVqComponent', () => {
    let component: EnfVqComponent;
    let fixture: ComponentFixture<EnfVqComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ EnfVqComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(EnfVqComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

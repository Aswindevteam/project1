import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfxpComponent } from './enf-xp.component';
describe('EnfxpComponent', () => {
    let component: EnfxpComponent;
    let fixture: ComponentFixture<EnfxpComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ EnfxpComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(EnfxpComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

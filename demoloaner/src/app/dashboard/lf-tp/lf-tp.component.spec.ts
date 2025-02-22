import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LftpComponent } from './lf-tp.component';
describe('LftpComponent', () => {
    let component: LftpComponent;
    let fixture: ComponentFixture<LftpComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ LftpComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(LftpComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

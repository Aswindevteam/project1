import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MafgmComponent } from './maf-gm2.component';
describe('MafgmComponent', () => {
    let component: MafgmComponent;
    let fixture: ComponentFixture<MafgmComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ MafgmComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(MafgmComponent);
      component = fixture.componentInstance
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaftmComponent } from './maf-dm2.component';
describe('MaftmComponent', () => {
    let component: MaftmComponent;
    let fixture: ComponentFixture<MaftmComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ MaftmComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(MaftmComponent);
      component = fixture.componentInstance
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

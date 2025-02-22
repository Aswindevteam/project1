import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfXP160FComponent } from './bf-xp160f.component';
describe('BfXP160FComponent', () => {
    let component: BfXP160FComponent;
    let fixture: ComponentFixture<BfXP160FComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfXP160FComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfXP160FComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

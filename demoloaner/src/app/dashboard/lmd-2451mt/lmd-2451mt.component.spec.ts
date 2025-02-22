import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lmd2451mtComponent } from './lmd-2451mt.component';
describe('Lmd2451mtComponent', () => {
    let component: Lmd2451mtComponent;
    let fixture: ComponentFixture<Lmd2451mtComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Lmd2451mtComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Lmd2451mtComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

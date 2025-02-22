import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chs400xzebComponent } from './CH-S400-XZ-EB.component';
describe('Chs400xzebComponent', () => {
    let component: Chs400xzebComponent;
    let fixture: ComponentFixture<Chs400xzebComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Chs400xzebComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Chs400xzebComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

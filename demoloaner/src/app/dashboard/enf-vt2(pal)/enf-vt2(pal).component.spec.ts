import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Enfvt2palComponent } from './enf-vt2(pal).component';
describe('Chfvt2palComponent', () => {
    let component: Enfvt2palComponent;
    let fixture: ComponentFixture<Enfvt2palComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Enfvt2palComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Enfvt2palComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

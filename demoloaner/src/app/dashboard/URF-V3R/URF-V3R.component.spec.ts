import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Urfv3rComponent } from './URF-V3R.component';
describe('Urfv3rComponent', () => {
    let component: Urfv3rComponent;
    let fixture: ComponentFixture<Urfv3rComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Urfv3rComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Urfv3rComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

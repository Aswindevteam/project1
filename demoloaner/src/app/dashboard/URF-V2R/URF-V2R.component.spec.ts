import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Urfv2rComponent } from './URF-V2R.component';
describe('Urfv2rComponent', () => {
    let component: Urfv2rComponent;
    let fixture: ComponentFixture<Urfv2rComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Urfv2rComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Urfv2rComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chs20008lbComponent } from './CH-S200-08-LB.component';
describe('Chs20008lbComponent', () => {
    let component: Chs20008lbComponent;
    let fixture: ComponentFixture<Chs20008lbComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Chs20008lbComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Chs20008lbComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

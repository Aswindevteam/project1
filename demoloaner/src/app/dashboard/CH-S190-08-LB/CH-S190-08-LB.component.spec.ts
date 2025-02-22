import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chs19008lbcomponent } from './CH-S190-08-LB.component';
describe('EnfxpComponent', () => {
    let component: Chs19008lbcomponent;
    let fixture: ComponentFixture<Chs19008lbcomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Chs19008lbcomponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Chs19008lbcomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

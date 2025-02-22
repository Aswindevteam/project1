import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clvs400Component } from './CLV-S400.component';
describe('Clvs400Component', () => {
    let component: Clvs400Component;
    let fixture: ComponentFixture<Clvs400Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Clvs400Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Clvs400Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

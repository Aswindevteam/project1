import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cv190Component } from './CV-190.component';
describe('Cv190Component', () => {
    let component: Cv190Component;
    let fixture: ComponentFixture<Cv190Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Cv190Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Cv190Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

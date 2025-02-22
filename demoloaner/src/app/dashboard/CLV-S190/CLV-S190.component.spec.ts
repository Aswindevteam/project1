import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clvs190Component } from './CLV-S190.component';
describe(' Clvs190Component', () => {
    let component:  Clvs190Component;
    let fixture: ComponentFixture< Clvs190Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [  Clvs190Component]
      })
      .compileComponents();

      fixture = TestBed.createComponent( Clvs190Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

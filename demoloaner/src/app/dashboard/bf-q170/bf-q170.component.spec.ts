import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfQ170Component } from './bf-q170.component';
describe('BfQ170Component', () => {
    let component: BfQ170Component;
    let fixture: ComponentFixture<BfQ170Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfQ170Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfQ170Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

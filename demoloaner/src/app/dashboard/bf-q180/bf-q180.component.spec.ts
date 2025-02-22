import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfQ180Component } from './bf-q180.component';
describe('BfQ180Component', () => {
    let component: BfQ180Component;
    let fixture: ComponentFixture<BfQ180Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfQ180Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfQ180Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

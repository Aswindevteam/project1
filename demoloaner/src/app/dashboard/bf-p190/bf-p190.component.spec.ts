import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfP190Component } from './bf-p190.component';
describe('BfP190Component', () => {
    let component: BfP190Component;
    let fixture: ComponentFixture<BfP190Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfP190Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfP190Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

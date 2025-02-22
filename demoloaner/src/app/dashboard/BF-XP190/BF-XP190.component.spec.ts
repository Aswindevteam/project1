import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfxP190Component } from './BF-XP190.component';
describe('BfxP190Component', () => {
    let component: BfxP190Component;
    let fixture: ComponentFixture<BfxP190Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BfxP190Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BfxP190Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Imh200Component } from './imh-200.component';
describe('Imh200Component', () => {
    let component: Imh200Component;
    let fixture: ComponentFixture<Imh200Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Imh200Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Imh200Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

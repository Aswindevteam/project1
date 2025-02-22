import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bf1tq180Component } from './bf-1tq180.component';
describe('Bf1tq180Component', () => {
    let component: Bf1tq180Component;
    let fixture: ComponentFixture<Bf1tq180Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Bf1tq180Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Bf1tq180Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

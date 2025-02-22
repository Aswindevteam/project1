import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cyfva2Component } from './cyf-va2.component';
describe('Cyfva2Component', () => {
    let component: Cyfva2Component;
    let fixture: ComponentFixture<Cyfva2Component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Cyfva2Component ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Cyfva2Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

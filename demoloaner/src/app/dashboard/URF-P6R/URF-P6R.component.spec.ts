import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  Urfp6rComponent } from './URF-P6R.component';
describe(' Urfp6rComponent', () => {
    let component:  Urfp6rComponent;
    let fixture: ComponentFixture< Urfp6rComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [  Urfp6rComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent( Urfp6rComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

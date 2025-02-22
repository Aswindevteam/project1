import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  Urfp7rComponent } from './URF-P7R.component';
describe(' Urfp7rComponent', () => {
    let component:  Urfp7rComponent;
    let fixture: ComponentFixture< Urfp7rComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [  Urfp7rComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent( Urfp7rComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

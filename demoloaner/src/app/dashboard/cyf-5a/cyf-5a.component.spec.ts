import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cyf5aComponent } from './cyf-5a.component';
describe('Cyf5aComponent', () => {
    let component: Cyf5aComponent;
    let fixture: ComponentFixture<Cyf5aComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Cyf5aComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Cyf5aComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

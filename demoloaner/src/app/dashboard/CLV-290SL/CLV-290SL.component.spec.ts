import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clv290slComponent } from './CLV-290SL.component';
describe('Clv290slComponent', () => {
    let component: Clv290slComponent;
    let fixture: ComponentFixture<Clv290slComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Clv290slComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Clv290slComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

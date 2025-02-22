import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clls1ncllv1component } from './CLL-S1&CLL-V1.component';
describe('Clls1ncllv1component', () => {
    let component: Clls1ncllv1component;
    let fixture: ComponentFixture<Clls1ncllv1component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Clls1ncllv1component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Clls1ncllv1component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

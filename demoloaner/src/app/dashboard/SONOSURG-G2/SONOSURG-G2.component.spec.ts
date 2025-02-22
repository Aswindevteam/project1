import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sonosurgg2component } from './SONOSURG-G2.component';
describe('Sonosurgg2component', () => {
    let component: Sonosurgg2component;
    let fixture: ComponentFixture<Sonosurgg2component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Sonosurgg2component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Sonosurgg2component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
